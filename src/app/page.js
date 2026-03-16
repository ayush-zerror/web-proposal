"use client"
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {

  useEffect(() => {

    const slides = gsap.utils.toArray(".slide");

    slides.forEach((slide) => {
      ScrollTrigger.create({
        trigger: slide,
        start: "top top",
        pin: true,
        pinSpacing: false,
      });
    });

  }, []);

  return (
    <div className="bg-[#07070c] text-white font-sans overflow-x-hidden">


      {/* HERO */}
      <section className="slide relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-gradient-to-br from-[#0f0f1a] via-[#0a0a14] to-black">

        <div className="absolute w-[700px] h-[700px] bg-purple-500/20 blur-[200px] top-[-250px] left-[20%]"></div>
        <div className="absolute w-[500px] h-[500px] bg-indigo-500/20 blur-[200px] bottom-[-200px] right-[20%]"></div>

        <p className="text-sm tracking-[6px] text-purple-400 mb-6 z-10">
          DIGITAL PROPOSAL
        </p>

        <h1 className="text-7xl md:text-[110px] font-bold leading-[0.9] mb-8 z-10">
          Modern <br /> Web Experience
        </h1>

        <p className="max-w-xl text-gray-400 text-lg z-10">
          We craft premium digital experiences combining modern UI,
          performance and scalable engineering.
        </p>

      </section>



      {/* ABOUT */}
      <section className="slide min-h-screen flex items-center px-10 md:px-32 py-32 bg-[#0b0b12]">

        <div className="grid md:grid-cols-2 gap-24 items-center">

          <div>

            <p className="text-purple-400 text-sm tracking-[5px] mb-6">
              01 — ABOUT
            </p>

            <h2 className="text-[56px] font-bold leading-tight mb-6">
              Crafting Modern <br/> <span className="text-purple-400">Experiences</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
              We design and build digital platforms that combine
              beautiful interfaces with scalable engineering.
              Our goal is to help brands create impactful digital
              products and exceptional user experiences.
            </p>

          </div>


          <div>

            <div className="bg-gradient-to-br from-purple-500/20 to-transparent rounded-2xl p-12 border border-white/10 backdrop-blur-xl">

              <h3 className="text-2xl font-semibold mb-4">
                10+ Years Experience
              </h3>

              <p className="text-gray-400 mb-6">
                Delivering modern web platforms and digital experiences
                for global brands and startups.
              </p>

              <div className="grid grid-cols-2 gap-6">

                <div>
                  <p className="text-purple-400 text-xl font-semibold">100+</p>
                  <p className="text-gray-400 text-sm">Projects</p>
                </div>

                <div>
                  <p className="text-purple-400 text-xl font-semibold">15+</p>
                  <p className="text-gray-400 text-sm">Countries</p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* SERVICES */}
      <section className="slide min-h-screen flex flex-col justify-center px-10 md:px-32 py-32 bg-[#090910]">

        <p className="text-purple-400 text-sm tracking-[5px] mb-8">
          02 — SERVICES
        </p>

        <h2 className="text-[56px] font-bold mb-16">
          What We Build
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {[
            "UI / UX Design",
            "Web Development",
            "Performance Optimization",
            "Analytics Integration",
          ].map((service, i) => (

            <div
              key={i}
              className="group p-10 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:-translate-y-3 hover:border-purple-500/40 transition duration-300"
            >

              <p className="text-purple-400 text-sm mb-4">
                0{i + 1}
              </p>

              <h3 className="text-xl font-semibold mb-3">
                {service}
              </h3>

              <div className="w-10 h-[2px] bg-purple-400 mb-4"></div>

              <p className="text-gray-400 text-sm">
                Building scalable and modern digital platforms
                focused on performance and usability.
              </p>

            </div>

          ))}

        </div>

      </section>



      {/* CTA */}
      <section className="slide min-h-screen flex flex-col justify-center items-center text-center px-6 py-32 bg-gradient-to-br from-[#0b0b14] to-black">

        <p className="text-purple-400 text-sm tracking-[6px] mb-6">
          START A PROJECT
        </p>

        <h2 className="text-[80px] md:text-[100px] font-bold mb-8 leading-[0.9]">
          Let's Build <br/> Something Great
        </h2>

        <p className="text-gray-400 max-w-md text-lg mb-12">
          Partner with us to create powerful digital experiences
          that elevate your brand.
        </p>

        <button className="px-12 py-4 rounded-full bg-purple-500 hover:bg-purple-600 transition text-white font-semibold text-lg">
          Contact Us
        </button>

      </section>

    </div>
  );
};

export default Home;