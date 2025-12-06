"use client";

import Link from "next/link";

export default function Home({ onGetStarted }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section Container */}
      <div className="relative">
        <div className="mx-auto w-[90%] overflow-hidden rounded-b-2xl shadow-2xl mt-8">
          <div className="relative h-[600px]">
            <img
              src="/Home/Group.png"
              alt="Skilled workers collaborating"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        </div>

        {/* Text Overlay */}
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto w-[90%] text-center">
            <section className="relative pb-16 pt-8 text-white md:pb-20 md:pt-12">
              <div className="mx-auto max-w-8xl px-4">
                <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl xl:text-7xl [text-shadow:0_4px_12px_rgba(0,0,0,0.8)] drop-shadow-[0_8px_24px_rgba(0,0,0,0.7)]">
                  Find Skilled Workers Near You
                </h1>

                <p className="mb-8 mx-auto text-lg leading-relaxed text-gray-100 md:text-xl lg:text-2xl [text-shadow:0_2px_rgba(0,0,0,0.1)] drop-shadow-md w-[100%]">
                  Our platform connects job seekers and employers across all
                  industries, all skill levels, and every type of work. Whether
                  you're looking for your next career move or searching for the
                  perfect person to join your team, we make the process fast,
                  easy, and reliable.
                </p>

                <button
                  onClick={onGetStarted}
                  className="rounded-xl bg-red-600 px-10 py-5 text-lg font-semibold text-white transition-all duration-300 hover:bg-red-700 shadow-2xl hover:shadow-3xl hover:scale-105"
                >
                  Get Started
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Hire Now Section */}
      <div className="relative mt-22 w-[90%] mx-auto">
        <h2 className="text-red-600 text-4xl font-bold mb-15">Hire Now</h2>

        <div className="grid grid-cols-7 gap-4">
          {/* CARD 1 */}
          <Link href="/category/plumber">
            <div className="relative w-full h-40 rounded-xl overflow-hidden cursor-pointer">
              <img
                src="/Home/plumber.png"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/90 to-transparent"></div>
              <h3 className="absolute text-[20px] bottom-2 left-1/2 -translate-x-1/2 text-white drop-shadow-md">
                Plumber
              </h3>
            </div>
          </Link>

          {/* CARD 2 */}
          <Link href="/category/electrician">
            <div className="relative w-full h-40 rounded-xl overflow-hidden cursor-pointer">
              <img
                src="/Home/electrician.png"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/90 to-transparent"></div>
              <h3 className="absolute text-[20px] bottom-2 left-1/2 -translate-x-1/2 text-white drop-shadow-md">
                Electrician
              </h3>
            </div>
          </Link>

          {/* CARD 3 */}
          <Link href="/category/driver">
            <div className="relative w-full h-40 rounded-xl overflow-hidden cursor-pointer">
              <img
                src="Home/driver.png"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/90 to-transparent"></div>
              <h3 className="absolute text-[20px] bottom-2 left-1/2 -translate-x-1/2 text-white drop-shadow-md">
                Driver
              </h3>
            </div>
          </Link>

          {/* CARD 4 */}
          <Link href="/category/gardener">
            <div className="relative w-full h-40 rounded-xl overflow-hidden cursor-pointer">
              <img
                src="/Home/gardener.png"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/90 to-transparent"></div>
              <h3 className="absolute text-[20px] bottom-2 left-1/2 -translate-x-1/2 text-white drop-shadow-md">
                Gardener
              </h3>
            </div>
          </Link>

          {/* CARD 5 */}
          <Link href="/category/carpenter">
            <div className="relative w-full h-40 rounded-xl overflow-hidden cursor-pointer">
              <img
                src="/Home/carpenter.png"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/90 to-transparent"></div>
              <h3 className="absolute text-[20px] bottom-2 left-1/2 -translate-x-1/2 text-white drop-shadow-md">
                Carpenter
              </h3>
            </div>
          </Link>

          {/* CARD 6 */}
          <Link href="/category/cook">
            <div className="relative w-full h-40 rounded-xl overflow-hidden cursor-pointer">
              <img
                src="/Home/cook.png"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/90 to-transparent"></div>
              <h3 className="absolute text-[20px] bottom-2 left-1/2 -translate-x-1/2 text-white drop-shadow-md">
                Cook
              </h3>
            </div>
          </Link>

          {/* CARD 7 */}
          <Link href="/category/more">
            <div className="relative w-full h-40 rounded-xl overflow-hidden cursor-pointer">
              <img
                src="/Home/more.png"
                className="w-full h-full object-cover"
              />
              <span className="absolute inset-0 flex items-center justify-center text-white text-8xl drop-shadow-xl">
                →
              </span>
              <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/90 to-transparent"></div>
              <h3 className="absolute text-[20px] bottom-2 left-1/2 -translate-x-1/2 text-white drop-shadow-md">
                More
              </h3>
            </div>
          </Link>
        </div>
      </div>

      {/* Top Employees Section */}
      <div className="relative mt-20 w-[90%] mx-auto mb-20">
        <h2 className="text-red-600 text-4xl font-bold mb-15">Top Employees</h2>

        {/* Employee Card 1 */}
        <Link href="/employee/john-doe">
          <div className="mx-auto mt-10 bg-white shadow-lg rounded-xl p-4 flex items-center justify-between cursor-pointer">
            <div className="flex items-start gap-4">
              <img
                src="/Home/person1.png"
                className="w-40 h-40 rounded-xl object-cover"
              />

              <div>
                <h3 className="text-3xl font-bold">John Doe</h3>
                <p className="text-gray-600 text-2xl mt-5">Plumber</p>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="text-yellow-500 text-4xl">★★★★☆</div>
              <button className="bg-red-600 text-white text-3xl font-semibold px-12 py-2 rounded-lg">
                Hire
              </button>
            </div>
          </div>
        </Link>

        {/* Employee Card 2 */}
        <Link href="/employee/jane-smith">
          <div className="mx-auto mt-10 bg-white shadow-lg rounded-xl p-4 flex items-center justify-between cursor-pointer">
            <div className="flex items-start gap-4">
              <img
                src="/Home/person2.png"
                className="w-40 h-40 rounded-xl object-cover"
              />

              <div>
                <h3 className="text-3xl font-bold">Jane Smith</h3>
                <p className="text-gray-600 text-2xl mt-5">Electrician</p>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="text-yellow-500 text-4xl">★★★★★</div>
              <button className="bg-red-600 text-white text-3xl font-semibold px-12 py-2 rounded-lg">
                Hire
              </button>
            </div>
          </div>
        </Link>

        {/* Employee Card 3 */}
        <Link href="/employee/michael-lee">
          <div className="mx-auto mt-10 bg-white shadow-lg rounded-xl p-4 flex items-center justify-between cursor-pointer">
            <div className="flex items-start gap-4">
              <img
                src="/Home/person3.png"
                className="w-40 h-40 rounded-xl object-cover"
              />

              <div>
                <h3 className="text-3xl font-bold">Michael Lee</h3>
                <p className="text-gray-600 text-2xl mt-5">Carpenter</p>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="text-yellow-500 text-4xl">★★★★☆</div>
              <button className="bg-red-600 text-white text-3xl font-semibold px-12 py-2 rounded-lg">
                Hire
              </button>
            </div>
          </div>
        </Link>
      </div>

      {/* Stats Section */}
      <section className="relative text-white py-16 md:py-24 overflow-hidden mt-30 h-130">
        <div className="absolute inset-0">
          <img src="/Home/svg1.png" className="h-130 w-full object-fill" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-5xl md:text-6xl font-bold drop-shadow-lg">
                100+
              </div>
              <div className="text-lg md:text-xl mt-2 drop-shadow">
                Happy Customer
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-5xl md:text-6xl font-bold drop-shadow-lg">
                250+
              </div>
              <div className="text-lg md:text-xl mt-2 drop-shadow">
                Registered Worker
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-5xl md:text-6xl font-bold drop-shadow-lg">
                500+
              </div>
              <div className="text-lg md:text-xl mt-2 drop-shadow">
                Total Users
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
