'use client';
import { useEffect, useState } from 'react';
import { gsap, CSSPlugin, Expo } from 'gsap';
import Nav from '../../components/nav'; // Correct import for Nav
import First from '../../components/first'; // Import First component for image slider

gsap.registerPlugin(CSSPlugin);

export default function Home() {
  const [counter, setCounter] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false); // For showing Nav after animation completes

  useEffect(() => {
    // Interval to increase the loading bar width
    const count = setInterval(() => {
      setCounter((prevCounter) =>
        prevCounter < 100
          ? prevCounter + 1
          : (clearInterval(count), setCounter(100), reveal())
      );
    }, 25);
    return () => clearInterval(count); // Clean up the interval on unmount
  }, []);

  const reveal = () => {
    // Create a GSAP animation timeline for loading
    const t1 = gsap.timeline({
      onComplete: () => {
        console.log('Loading completed');
        setIsLoaded(true); // Show Nav and First component after animation completes
      },
    });
    t1.to('.follow', {
      width: '100%',
      ease: Expo.easeInOut,
      duration: 1.2,
      delay: 0.7,
    })
      .to('.hide', { opacity: 0, duration: 0.3 })
      .to('.hide', { display: 'none', duration: 0.3 })
      .to('.follow', {
        height: '100%',
        ease: Expo.easeInOut,
        duration: 0.7,
        delay: 0.5,
      })
      .to('.content', { width: '100%', ease: Expo.easeInOut, duration: 0.7 })
      .to('.title-lines', { display: 'block', duration: 0.1 })
      .to('.title-lines', {
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
      {isLoaded && (
        <div className="flex w-full h-full">
          {/* Nav component */}
          <div className="absolute top-0 left-0 w-full z-50">
            <Nav />
          </div>

          {/* First component with image slider next to the Nav */}
          <div className="absolute top-[133px] left-0 w-full h-[900px] z-400">
            <First />
          </div>
         
        </div>
      )}
    </div>
  );
}
