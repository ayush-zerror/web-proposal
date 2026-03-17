"use client";
import React from "react";

const Home = () => {
  return (
    <div className="bg-black relative">
      <div className="top-0 sticky h-screen flex items-center justify-center px-[1.5rem] py-[1.5rem]">

        {/* Card Section */}
        <section className="w-full max-w-[75rem] h-[42rem] bg-black text-white rounded-[2rem] px-[1.5rem] py-[1.5rem] flex flex-col justify-between">

          {/* Heading */}
          <h1 className="text-[5rem] md:text-[15rem] leading-[0.8] font-bold tracking-[-0.03em] uppercase text-center">
            Welcome
          </h1>

          {/* Image */}
          <div className="w-full rounded-[1.5rem] overflow-hidden bg-neutral-200">
            <img
              src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=1170&auto=format&fit=crop"
              alt="hero"
              className="w-full h-[23rem] object-cover"
            />
          </div>

          {/* Footer */}
          <div className="flex justify-between text-[0.625rem] text-gray-400 uppercase tracking-[0.15em]">
            <p>Design Studio</p>
            <p>Since 2024</p>
            <p>All Rights Reserved</p>
          </div>

        </section>
      </div>
      <div className=" top-0 sticky h-screen flex items-center justify-center px-[1.5rem] py-[1.5rem]">

        <section className="w-full max-w-[75rem] h-[42rem] bg-[#f5f5f5] rounded-[2rem] px-[2rem] py-[2rem] flex flex-col justify-between">

          {/* Header */}
          <div className="flex justify-between items-center text-[0.7rem] font-bold uppercase tracking-[0.2em] text-black">
            <p>Contents</p>
            <p>Index 01</p>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center gap-[0.8rem] flex-1">
            {[
              "Welcome to [boring]",
              "Timeline",
              "Terms & Conditions",
              "Payments",
              "Client Portal",
              "Your Files",
              "Communication",
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-[1.5rem]">

                {/* Number */}
                <span className="text-[3.5rem] leading-none font-extrabold tracking-[-0.03em] w-[6rem]">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Text */}
                <h2 className="text-[3.5rem] leading-none font-extrabold uppercase tracking-[-0.03em]">
                  {text}
                </h2>

              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center text-[0.7rem] uppercase tracking-[0.2em] font-bold text-black">
            <p>Select a section to begin</p>
            <p>Scroll ↓</p>
          </div>

        </section>
      </div>
      <div className="top-0 sticky h-screen flex items-center justify-center px-[1.5rem] py-[1.5rem] ">

        <section className="w-full max-w-[75rem] h-[42rem] border-5 bg-black text-white rounded-[2rem] px-[2rem] py-[2rem] flex flex-col justify-between">

          {/* Header */}
          <div className="flex justify-between items-center text-[0.7rem] font-bold uppercase tracking-[0.2em] text-white/60">
            <p>Introduction</p>
            <p>01</p>
          </div>

          {/* Center Content */}
          <div className="flex items-center justify-center flex-1 text-center">
            <h1 className="text-[3.5rem] md:text-[6rem] leading-[1.05] font-extrabold uppercase tracking-[-0.02em] max-w-[60rem]">
              Welcome to <br />
              [boring world]. <br />
              Let’s get into it, <br />
              shall we?
            </h1>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center text-[0.7rem] uppercase tracking-[0.2em] font-bold text-white/60">
            <p>Start</p>
            <p>Scroll ↓</p>
          </div>

        </section>
      </div>
      <div className="top-0 sticky h-screen flex items-center justify-center px-[1.5rem] py-[1.5rem] ">

        <section className="w-full max-w-[75rem] h-[42rem] bg-[#f5f5f5] rounded-[2rem] px-[2rem] py-[2rem] flex flex-col justify-between">

          {/* Header */}
          <div className="flex justify-between items-center text-[0.7rem] font-bold uppercase tracking-[0.2em] text-black/60">
            <p>Values</p>
            <p>02</p>
          </div>

          {/* Title */}
          <h1 className="text-[3rem] md:text-[4rem] font-extrabold uppercase tracking-[-0.03em] text-black">
            What we value
          </h1>

          {/* Cards (NO STRETCH) */}
          <div className="grid grid-cols-4 gap-[1.2rem] items-start">

            {[
              "Quality",
              "Innovation",
              "Integrity",
              "Flexibility",
            ].map((title, i) => (
              <div
                key={i}
                className="bg-black text-white rounded-[1.5rem] p-[1.5rem] flex flex-col gap-[1rem]"
              >
                {/* Title */}
                <h2 className="text-[1.2rem] font-bold uppercase">
                  {title}
                </h2>

                {/* Content */}
                <p className="text-[0.85rem] leading-[1.5] text-white/70">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <p className="text-[0.85rem] leading-[1.5] text-white/70">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus quidem molestiae debitis recusandae nobis ut libero cum beatae. Atque, vel soluta. Dolorum praesentium eveniet corrupti, soluta perferendis quia sint, magnam minima obcaecati maxime ipsam. Neque obcaecati velit unde itaque natus.
                </p>
              </div>
            ))}

          </div>

          {/* Footer */}
          <div className="flex justify-between items-center text-[0.7rem] uppercase tracking-[0.2em] font-bold text-black/60">
            <p>Our Principles</p>
            <p>Scroll ↓</p>
          </div>

        </section>
      </div>
      <div className="top-0 sticky h-screen flex items-center justify-center px-[1.5rem] py-[1.5rem]">

        <section className="w-full max-w-[75rem] h-[42rem] bg-[#f5f5f5] rounded-[2rem] px-[2rem] py-[2rem] flex flex-col justify-between">

          {/* Header */}
          <div className="flex justify-between items-center text-[0.7rem] font-bold uppercase tracking-[0.2em] text-black/60">
            <p>About</p>
            <p>03</p>
          </div>

          {/* Main Content (takes remaining space) */}
          <div className="flex flex-1 gap-[2rem] mt-[1rem] mb-[1rem]">

            {/* Left */}
            <div className="w-[50%] flex flex-col justify-center gap-[1.5rem]">
              <h1 className="text-[3rem] md:text-[4rem] leading-[0.95] font-extrabold uppercase tracking-[-0.03em] text-black">
                Get to <br /> know us
              </h1>

              <p className="text-[0.9rem] leading-[1.6] text-black/70 max-w-[28rem]">
                We are a creative team focused on building modern, clean, and impactful digital experiences.
              </p>

              <p className="text-[0.9rem] leading-[1.6] text-black/70 max-w-[28rem]">
                From concept to delivery, we ensure every detail is crafted with precision.
              </p>
            </div>

            {/* Right Image (FULL HEIGHT OF CONTENT ONLY) */}
            <div className="w-[50%] h-[34rem] rounded-[1.5rem] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1584772223775-a00c5a0e72d3?q=80&w=685&auto=format&fit=crop"
                alt="about"
                className="w-full  object-cover"
              />
            </div>

          </div>

          {/* Footer */}
          <div className="flex justify-between items-center text-[0.7rem] uppercase tracking-[0.2em] font-bold text-black/60">
            <p>Who we are</p>
            <p>Scroll ↓</p>
          </div>

        </section>
      </div>
      <div className="top-0 sticky h-screen flex items-center justify-center px-[1.5rem] py-[1.5rem] ">

        <section className="w-full max-w-[75rem] h-[42rem] bg-[#f5f5f5] rounded-[2rem] px-[2rem] py-[2rem] flex flex-col">

          {/* Header */}
          <div className="flex justify-between items-center text-[0.7rem] font-bold uppercase tracking-[0.2em] text-black/60">
            <p>Work</p>
            <p>04</p>
          </div>

          {/* Main Content */}
          <div className="flex flex-1 gap-[2rem] mt-[1rem] mb-[1rem]">

            {/* Left Content */}
            <div className="w-[40%] flex flex-col gap-[1.2rem]">
              <h1 className="text-[2.5rem] md:text-[3rem] leading-[1] font-extrabold uppercase tracking-[-0.03em] text-black">
                Works <br /> Overview
              </h1>

              <p className="text-[0.85rem] leading-[1.6] text-black/70 max-w-[22rem]">
                A selection of our recent work showcasing design, development, and creative direction across different domains.
              </p>

              <p className="text-[0.85rem] leading-[1.6] text-black/70 max-w-[22rem]">
                Each project reflects our focus on clarity, usability, and strong visual identity.
              </p>
            </div>

            {/* Right Grid */}
            {/* Right Horizontal Grid */}
            <div className="w-[60%] flex items-end ">

              <div className="grid grid-rows-2 grid-flow-col  gap-[1rem] min-w-max">

                <div className="w-full flex flex-col gap-[0.5rem]">

                  {/* Card */}
                  <div className="w-full h-[13rem] rounded-[0.8rem] overflow-hidden bg-neutral-300">
                    <img
                      src={`https://www.rejouice.com/_vercel/image?url=https:%2F%2Fimages.prismic.io%2Frejouice-2024%2FZ22LaZbqstJ981u4_Frame21196.png?auto=format,compress?auto=compress,format&w=2559&q=80`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Title BELOW */}
                  <h3 className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-black">
                    Lorem, ipsum.
                  </h3>

                </div>
                <div className="w-full flex flex-col gap-[0.5rem]">

                  {/* Card */}
                  <div className="w-full h-[13rem] rounded-[0.8rem] overflow-hidden bg-neutral-300">
                    <img
                      src={`https://www.rejouice.com/_vercel/image?url=https:%2F%2Fimages.prismic.io%2Frejouice-2024%2FZ3fSX5bqstJ99A_s_Oura-3d-render-01.png?auto=format,compress?auto=compress,format&w=2559&q=80`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Title BELOW */}
                  <h3 className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-black">
                    Lorem, ipsum.
                  </h3>

                </div>
                <div className="w-full flex flex-col gap-[0.5rem]">

                  {/* Card */}
                  <div className="w-full h-[13rem] rounded-[0.8rem] overflow-hidden bg-neutral-300">
                    <img
                      src={`https://www.rejouice.com/_vercel/image?url=https:%2F%2Fimages.prismic.io%2Frejouice-2024%2FZ3FRGZbqstJ984Gt_MP-lastcover.png?auto=format,compress?auto=compress,format&w=2559&q=80`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Title BELOW */}
                  <h3 className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-black">
                    Lorem, ipsum.
                  </h3>

                </div>
                <div className="w-full flex flex-col gap-[0.5rem]">

                  {/* Card */}
                  <div className="w-full h-[13rem] rounded-[0.8rem] overflow-hidden bg-neutral-300">
                    <img
                      src={`https://www.rejouice.com/_vercel/image?url=https:%2F%2Fimages.prismic.io%2Frejouice-2024%2FZ218opbqstJ981rL_Group3919.png?auto=format,compress?auto=compress,format&w=2559&q=80`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Title BELOW */}
                  <h3 className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-black">
                    Lorem, ipsum.
                  </h3>

                </div>

              </div>

            </div>

          </div>

          {/* Footer */}
          <div className="flex justify-between items-center text-[0.7rem] uppercase tracking-[0.2em] font-bold text-black/60">
            <p>Selected Projects</p>
            <p>Scroll ↓</p>
          </div>

        </section>
      </div>
      <div className=" top-0 sticky h-screen flex items-center justify-center px-[1.5rem] py-[1.5rem]">

        {/* Card Section */}
        <section className="w-full max-w-[75rem] h-[42rem] border-5 bg-black text-white rounded-[2rem] px-[1.5rem] py-[1.5rem] flex flex-col justify-between">

          {/* Heading */}
          <h1 className="text-[5rem] whitespace-nowrap  md:text-[13rem] leading-[0.8] font-bold tracking-[-0.03em] uppercase text-center">
            Thank you
          </h1>

          {/* Image */}
          <div className="w-full rounded-[1.5rem] overflow-hidden bg-neutral-200">
            <img
              src="https://images.unsplash.com/photo-1652454107902-073b38414442?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="hero"
              className="w-full h-[23rem] object-cover object-top"
            />
          </div>

          {/* Footer */}
          <div className="flex justify-between text-[0.625rem] text-gray-400 uppercase tracking-[0.15em]">
            <p>Design Studio</p>
            <p>Since 2024</p>
            <p>All Rights Reserved</p>
          </div>

        </section>
      </div>
    </div>

  );
};

export default Home;