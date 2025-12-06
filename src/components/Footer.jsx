"use client";

export default function Footer() {
  return (
    <footer className="w-[95%] mx-auto mt-10 mb-10 bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
      <div className="px-10 py-12 md:px-16 md:py-16">
        {/* TOP FOOTER GRID - Changed to use justify-between */}
        <div className="flex flex-col md:flex-row justify-between gap-14">
          {/* LEFT SECTION */}
          <div className="md:w-2/5">
            {/* Brand */}
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <img src="/Home/logo.jpeg" alt="logo" className="w-14 h-14" />
              <span className="text-[#E05A5A]">Trust</span>
              <span className="text-black">Mitra</span>
            </h1>

            {/* Description */}
            <p className="text-gray-500 text-lg leading-relaxed mt-4">
              Trust Mitra empowers peoples to transform raw data into clear,
              compelling visuals – making insights easier to share, understand,
              and act on.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-5 mt-6">
              {["F", "I", "in", "X"].map((icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 border flex items-center justify-center rounded-full text-lg hover:bg-gray-50 cursor-pointer"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* MIDDLE & RIGHT SECTIONS GROUPED TO THE RIGHT */}
          <div className="flex flex-col md:flex-row gap-14 md:w-3/5 justify-end">
            {/* MIDDLE SECTION - Services and About Us side by side */}
            <div className="grid grid-cols-2 gap-8">
              {/* Services */}
              <div>
                <h2 className="font-semibold text-gray-900 text-lg mb-3">
                  Services
                </h2>
                <ul className="space-y-2 text-gray-500 text-base">
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 transition-colors"
                    >
                      For Jobseeker
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 transition-colors"
                    >
                      For Employer
                    </a>
                  </li>
                </ul>
              </div>

              {/* About Us */}
              <div>
                <h2 className="font-semibold text-gray-900 text-lg mb-3">
                  About Us
                </h2>
                <ul className="space-y-2 text-gray-500 text-base">
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 transition-colors"
                    >
                      About TrustMitra
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 transition-colors"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 transition-colors"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 transition-colors"
                    >
                      Linkedin
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* RIGHT SECTION */}
            <div>
              <h2 className="font-semibold text-gray-900 text-lg mb-4">
                Contact Us
              </h2>

              <ul className="space-y-4 text-gray-500 text-base">
                {/* Address */}
                <li className="flex gap-3">
                  <span className="text-[#E05A5A]">📍</span>
                  <p className="leading-snug">
                    Ravibhawan, Kalanki,
                    <br />
                    Kathmandu, Nepal
                  </p>
                </li>

                {/* Phone */}
                <li className="flex gap-3 items-center">
                  <span className="text-[#E05A5A]">📞</span>
                  <a
                    href="tel:+9779874563210"
                    className="hover:text-gray-900 transition-colors"
                  >
                    +977 9874563210
                  </a>
                </li>

                {/* Email */}
                <li className="flex gap-3 items-center">
                  <span className="text-[#E05A5A]">📧</span>
                  <a
                    href="mailto:info@trustmitra.com"
                    className="hover:text-gray-900 transition-colors"
                  >
                    info@trustmitra.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="w-full border-t mt-12 mb-6 border-gray-300"></div>

        {/* BOTTOM FOOTER */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 TrustMitra. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-gray-600 underline text-sm">
            <a href="#" className="hover:text-gray-900 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors">
              Cookies Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
    
  );
}
