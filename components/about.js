'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

export default function About() {
    return (
        <div className="bg-[#E3F0A3] text-gray-800 py-16 px-4 md:px-12">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 tracking-widest">Birla Open Minds</h2>
                <p className="text-md sm:text-lg text-yellow-700 mt-2 uppercase tracking-wide">Over 30 Years of History</p>

                <p className="mt-6 text-base sm:text-lg md:text-xl leading-relaxed max-w-6xl mx-auto">
                    Birla Open Minds is a premier school established in the city of Gurgaon. Located in the national capital region of India,
                    the school bases its ethos on a commitment towards empowering and educating 21st-century learners who are ready to thrive in a globalised
                    and modern world. Here at Lancers, we do not just celebrate a tradition of academic excellence but an authentic learning experience that
                    prepares students to face life's challenges as they make a significant contribution to the world.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                    <div className="flex flex-col items-center">
                        <div className="text-yellow-600 text-4xl sm:text-5xl mb-2">🌐</div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-blue-900">45+</h3>
                        <p className="text-center mt-2 text-sm sm:text-base">Nationalities / Cultures Represented at LIS</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="text-yellow-600 text-4xl sm:text-5xl mb-2">🧱</div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-blue-900">1972</h3>
                        <p className="text-center mt-2 text-sm sm:text-base">Foundation of Lancers</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="text-yellow-600 text-4xl sm:text-5xl mb-2">🏫</div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-blue-900">1</h3>
                        <p className="text-center mt-2 text-sm sm:text-base">India's No. 1 Award-Winning Campus</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="text-yellow-600 text-4xl sm:text-5xl mb-2">🎓</div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-blue-900">34.1</h3>
                        <p className="text-center mt-2 text-sm sm:text-base">Average IB Score from the Class of 2024</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
