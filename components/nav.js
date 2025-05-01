'use client';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // Importing the icons
import Image from 'next/image';
import { useState } from 'react'; // Import useState for handling the mobile menu

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle the mobile menu visibility
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="w-full relative">
            {/* Top Bar */}
            <div className="bg-[#E3F0A3] text-green-500 hover:text-green-600 flex justify-between items-center px-6 py-1 text-sm">
                {/* Left: Empty for overlap */}
                <div className="flex items-center gap-6"></div>

                {/* Center: Phone & Mail Info */}
                <div className="flex items-center gap-6 justify-center w-full">
                    <div className="flex items-center gap-2">
                        <FaPhoneAlt size={16} /> {/* React Icon for Phone */}
                        <span>+91 7388807999</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaEnvelope size={16} /> {/* React Icon for Email */}
                        <span>info@birlaopenmindslko.com</span>
                    </div>
                </div>

                {/* Right: Social Button */}
                <div>
                    <button className="bg-green-500 text-white hover:text-green-900 px-4 py-1 rounded-sm font-semibold whitespace-nowrap">
                        Get Us Social
                    </button>
                </div>
            </div>

            {/* Floating ADMISSION OPEN Button */}
            <div className="absolute left-6 top-[12px] z-20">
                <button className="bg-green-500 text-white hover:text-green-900 px-5 py-2 rounded-md font-semibold shadow-md">
                    ADMISSION OPEN
                </button>
            </div>

            {/* Main Navigation */}
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="w-full flex items-center justify-between px-8 py-6 bg-white shadow-md"
            >
                {/* Logo */}
                <div className="flex-shrink-0">
                    <Image src="/logo.webp" alt="Logo" width={130} height={50} />
                </div>

                {/* Mobile Hamburger Menu Icon */}
                <div className="lg:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-green-500 hover:text-green-600">
                        <span className="material-icons">menu</span>
                    </button>
                </div>

                {/* Nav Menu */}
                <ul
                    className={`lg:flex flex-col lg:flex-row items-center gap-6 xl:gap-10 ${
                        isMenuOpen ? 'block' : 'hidden'
                    } lg:block`}
                >
                    {[{ label: 'Home', href: '/', icon: '/home-1-svgrepo-com.svg' },
                    { label: 'Curriculum', href: '/curriculum', icon: '/raise-hand.png' },
                    { label: 'Infrastructure', href: '/infrastructure', icon: '/book-open-svgrepo-com.svg' },
                    { label: 'Sports', href: '/sports', icon: '/sports-shoes-1-svgrepo-com.svg' },
                    { label: 'Classroom', href: '/classroom', icon: '/file.svg' },
                    { label: 'The Birla Story', href: '/story', icon: '/chat-square-code-svgrepo-com.svg' },
                    { label: 'Contact Us', href: '/contact', icon: '/contact-svgrepo-com.svg' },
                    { label: 'Career', href: '/career', icon: '/person-line-drawing-svgrepo-com.svg' }]
                        .map(({ label, href, icon }) => (
                            <li
                                key={label}
                                className="flex flex-col items-center text-green-500 hover:text-green-600 text-sm"
                            >
                                <Image src={icon} alt={label} width={24} height={24} className="mb-1" />
                                <a href={href}>{label}</a>
                            </li>
                        ))}
                </ul>

                {/* Enquiry Button */}
                <a href="/enquiry">
                    <button className="bg-green-500 text-white hover:text-green-900 px-6 py-2 rounded-md font-bold transition">
                        ENQUIRY
                    </button>
                </a>
            </motion.nav>
        </div>
    );
}
