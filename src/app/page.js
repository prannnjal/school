'use client'

import { useState, useEffect } from "react";
import { gsap, CSSPlugin, Expo } from "gsap";
import Nav from "../../components/nav"; // Import Nav here
gsap.registerPlugin(CSSPlugin);

export default function Home() {
  const [counter, setCounter] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false); // NEW: for showing Nav

  useEffect(() => {
    const count = setInterval(() => {
      setCounter((counter) =>
        counter < 100
          ? counter + 1
          : (clearInterval(count), setCounter(100), reveal())
      );
    }, 25);
  }, []);

  const reveal = () => {
    const t1 = gsap.timeline({
      onComplete: () => {
        console.log("completed");
        setIsLoaded(true); // ✅ Show Nav after animation completes
      },
    });
    t1.to(".follow", {
      width: "100%",
      ease: Expo.easeInOut,
      duration: 1.2,
      delay: 0.7,
    })
      .to(".hide", { opacity: 0, duration: 0.3 })
      .to(".hide", { display: "none", duration: 0.3 })
      .to(".follow", {
        height: "100%",
        ease: Expo.easeInOut,
        duration: 0.7,
        delay: 0.5,
      })
      .to(".content", { width: "100%", ease: Expo.easeInOut, duration: 0.7 })
      .to(".title-lines", { display: "block", duration: 0.1 })
      .to(".title-lines", {
        opacity: 1,
        stagger: 0.15,
        ease: Expo.easeInOut,
        duration: 0.6,
      });
  };

  return (
    <div className="w-screen h-screen relative overflow-hidden text-black">
      {/* Loading Section */}
      <div className="absolute inset-0 bg-[#80EF80] flex justify-center items-center z-50">
        <div className="follow absolute bg-[#E3F0A3] h-[2px] w-0 left-0 z-10"></div>
        <div
          className="hide absolute left-0 bg-white h-[2px] transition-all duration-300"
          style={{ width: `${counter}%` }}
        ></div>
        <p className="hide absolute text-white text-[130px] font-semibold transform -translate-y-4">
          {counter}%
        </p>
      </div>

      {/* Main Content */}
      <div className="content absolute top-0 left-0 h-full w-0 bg-[#121212] flex flex-col justify-center items-center overflow-hidden text-white z-40">
        <p className="title-lines hidden opacity-0 text-center text-[104px] font-semibold m-0">
          The greatest glory in living lies
        </p>
        <p className="title-lines hidden opacity-0 text-center text-[104px] font-semibold m-0">
          not in never falling,
        </p>
        <p className="title-lines hidden opacity-0 text-center text-[104px] font-semibold m-0">
          but in rising every time we fall.
        </p>
        <p className="title-lines hidden opacity-0 text-center text-[104px] font-semibold m-0">
          -Nelson Mandela
        </p>
      </div>

      {/* ✅ Nav appears only after loading */}
      {isLoaded && (
        <div className="absolute top-0 left-0 w-full z-50">
          <Nav />
        </div>
      )}
    </div>
  );
}
