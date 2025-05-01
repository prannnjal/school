'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

const images = [
  '/image1.jpg',
  '/image2.jpg',
  '/image3.jpg',
  '/image4.jpeg',
];

const textLines = [
  "Your child's future began with the right school—make it extraordinary.",
  "Empower your child's potential with a foundation that inspires success.",
  "Every great achievement starts with the right education—set your child on the path to greatness.",
  "A remarkable future begins with the right learning environment—unlock your child's brilliance.",
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const imageRefs = useRef([]);
  const textRefs = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const image = imageRefs.current[current];
    const text = textRefs.current[current];

    // Animate the text out first
    if (text) {
      gsap.to(text, {
        rotateY: 360,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        onComplete: () => {
          // After the text is out, animate the new text in
          gsap.fromTo(
            text,
            { rotateY: -360, opacity: 0 },
            { rotateY: 0, opacity: 1, duration: 1, ease: 'power2.out' }
          );
        }
      });
    }

    // Animate the image
    if (image) {
      gsap.fromTo(
        image,
        { opacity: 0, scale: 1.1 },
        { opacity: 1, scale: 1, duration: 1.2, ease: 'power2.out' }
      );
    }
  }, [current]);

  return (
    <div className="w-full h-[350px] md:h-[550px] relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 w-full h-full" style={{ perspective: '1000px' }}>
        {images.map((src, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) imageRefs.current[index] = el;
            }}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="object-cover"
              priority={index === current}
            />
            <div
              ref={(el) => {
                if (el) textRefs.current[index] = el;
              }}
              className="absolute inset-0 flex items-center justify-center px-6 sm:px-8 md:px-10 lg:px-14"
            >
              <h1 className="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center max-w-3xl lg:max-w-4xl">
                {textLines[index]}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
