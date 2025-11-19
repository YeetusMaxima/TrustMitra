from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.orm import Session

from .database import get_db
from .config import settings
from .api.v1 import auth, users, reviews
from .utils.security import verify_token

# Initialize FastAPI app
app = FastAPI(
    title="TrustMitra Backend",
    description="A community-based reputation system for daily transactions with verified reviews, escrow, and dispute resolution.",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with specific frontend URLs
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# OAuth2 scheme for token authentication
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="auth/login")

# Dependency to get current user from token
async def get_current_user(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):
    try:
        payload = verify_token(token)
        user_id = payload.get("sub")
        if not user_id:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid token",
                headers={"WWW-Authenticate": "Bearer"},
            )
        # Here you would fetch the user from DB using user_id
        # For now, returning user_id as placeholder
        return user_id
    except Exception:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Could not validate credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )

# Include API routers
app.include_router(auth.router, prefix="/api/v1/auth", tags=["Authentication"])
app.include_router(users.router, prefix="/api/v1/users", tags=["Users"])
app.include_router(reviews.router, prefix="/api/v1/reviews", tags=["Reviews"])

# Root endpoint
@app.get("/")
def read_root():
    return {
        "message": "Welcome to TrustMitra - Peer Verification Network",
        "description": "Building trust through verified reviews, escrow payments, and AI-powered fake review detection.",
        "docs": "/docs",
        "version": app.version
    }

# Health check endpoint
@app.get("/health")
def health_check():
    return {"status": "healthy"}

# Optional: Add startup event to initialize database or load config
@app.on_event("startup")
async def startup_event():
    # You can add logic here, e.g., create default admin user, check DB connection
    pass

# Optional: Add shutdown event
@app.on_event("shutdown")
async def shutdown_event():
    # Clean up resources if needed
    pass
