import { motion } from "framer-motion";

export default function Nav() {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full flex items-center justify-between px-8 py-4 bg-white shadow-md"
        >
            {/* Logo */}
            <div className="flex-shrink-0">
                <img src="/logo.webp" alt="Logo" className="h-10 w-auto" />
            </div>

            {/* Navigation Menu */}
            <ul className="flex items-center gap-10">
                {/* Home */}
                <li className="flex flex-col items-center text-green-500 hover:text-green-600">
                    <img src="/home-1-svgrepo-com.svg" alt="Home" className="mb-1 w-6 h-6" />
                    <a href="/">Home</a>
                </li>

                {/* Curriculum */}
                <li className="flex flex-col items-center text-green-500 hover:text-green-600">
                <img src="/raise-hand.png" alt="Home" className="mb-1 w-6 h-6" />
                    <a href="/curriculum">Curriculum</a>
                </li>

                {/* Infrastructure */}
                <li className="flex flex-col items-center text-green-500 hover:text-green-600">
                    <img src="/book-open-svgrepo-com.svg" alt="Infrastructure" className="mb-1 w-6 h-6" />
                    <a href="/infrastructure">Infrastructure</a>
                </li>

                {/* Sports */}
                <li className="flex flex-col items-center text-green-500 hover:text-green-600">
                    <img src="/sports-shoes-1-svgrepo-com.svg" alt="Sports" className="mb-1 w-6 h-6" />
                    <a href="/sports">Sports</a>
                </li>

                {/* Classroom */}
                <li className="flex flex-col items-center text-green-500 hover:text-green-600">
                    <img src="/file.svg" alt="Classroom" className="mb-1 w-6 h-6" />
                    <a href="/classroom">Classroom</a>
                </li>

                {/* The Birla Story */}
                <li className="flex flex-col items-center text-green-500 hover:text-green-600">
                    <img src="/chat-square-code-svgrepo-com.svg" alt="The Birla Story" className="mb-1 w-6 h-6" />
                    <a href="/story">The Birla Story</a>
                </li>

                {/* Contact Us */}
                <li className="flex flex-col items-center text-green-500 hover:text-green-600">
                    <img src="/contact-svgrepo-com.svg" alt="Contact Us" className="mb-1 w-6 h-6" />
                    <a href="/contact">Contact Us</a>
                </li>

                {/* Career */}
                <li className="flex flex-col items-center text-green-500 hover:text-green-600">
                    <img src="/person-line-drawing-svgrepo-com.svg" alt="Career" className="mb-1 w-6 h-6" />
                    <a href="/career">Career</a>
                </li>
            </ul>

            {/* Enquiry Button */}
            <a href="/enquiry">
                <button className="bg-green-500 text-white px-6 py-2 rounded-md font-bold hover:text-green-900 cursor-pointer">
                    ENQUIRY
                </button>
            </a>
        </motion.nav>
    );
}
