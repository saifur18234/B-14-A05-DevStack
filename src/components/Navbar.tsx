import Logo from "../assets/logo-text.png";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4">
                <div className="h-16 flex items-center justify-between">
                    {/* Hamburger Menu */}
                    <button className="md:hidden text-2xl">
                        <FiMenu />
                    </button>

                    {/* Logo */}
                    <img src={Logo} alt="Logo" className="h-10" />

                    {/* Navigation */}
                    <div className="hidden md:flex gap-8">
                        <a href="#home" className="text-pink-600">
                            Home
                        </a>
                        <a href="#technologies" className="text-slate-600">
                            Technologies
                        </a>
                        <a href="#projects" className="text-slate-600">
                            Projects
                        </a>
                        <a href="#about" className="text-slate-600">
                            About
                        </a>
                        <a href="#contact" className="text-slate-600">
                            Contact
                        </a>
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center gap-3 font-medium">
                        <button>Sign In</button>
                        <button className="bg-[#D91B7E] text-white px-3 md:px-5 py-2 rounded-full text-sm md:text-base font-semibold">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
