import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/projects' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <header className="fixed w-full z-50 font-sans">
            {/* Top Bar - Minimalist */}
            <div className="bg-primary text-dark font-bold py-2 text-xs hidden md:block">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <div className="flex space-x-6">
                        <div className="flex items-center space-x-2 hover:opacity-75 transition-opacity cursor-pointer">
                            <Mail size={14} className="text-dark" />
                            <span>sandeep.kumar@owera.ca</span>
                        </div>
                        <div className="flex items-center space-x-2 hover:opacity-75 transition-opacity cursor-pointer">
                            <Phone size={14} className="text-dark" />
                            <span>647 395 0215</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <MapPin size={14} className="text-dark" />
                        <span>Canada</span>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className={`transition-all duration-300 border-b ${scrolled ? 'bg-white/95 backdrop-blur-sm border-gray-100 py-3 shadow-minimal' : 'bg-white border-transparent py-5'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link to="/" className="text-3xl font-bold tracking-tighter text-dark">
                                OWERA<span className="text-primary">.</span>
                            </Link>
                        </div>

                        {/* Desktop Links */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-center space-x-8">
                                {links.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        className={`relative px-1 py-2 text-sm font-bold uppercase tracking-widest transition-colors duration-200 group text-dark hover:text-primary`}
                                    >
                                        {link.name}
                                        <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-primary transform origin-left transition-transform duration-300 ${isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                                    </Link>
                                ))}
                                {/* CTA Button - Minimal */}
                                <Link to="/contact" className={`ml-6 px-8 py-3 text-sm font-bold uppercase tracking-wider text-dark bg-primary hover:bg-primary-dark transition-all duration-300 shadow-minimal hover:shadow-minimal-hover hover:-translate-y-1`}>
                                    GET A QUOTE
                                </Link>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="p-2 text-dark hover:text-primary transition-colors"
                            >
                                {isOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu - Minimal */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-white border-b border-gray-100 shadow-xl overflow-hidden"
                        >
                            <div className="px-4 py-6 space-y-2">
                                {links.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`block px-4 py-3 text-base font-bold uppercase tracking-wider border-l-4 transition-all ${isActive(link.path)
                                            ? 'border-primary text-dark bg-primary/10'
                                            : 'border-transparent text-gray-500 hover:text-dark hover:bg-gray-50 hover:border-gray-200'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <div className="pt-4 mt-4 border-t border-gray-100">
                                    <Link to="/contact" onClick={() => setIsOpen(false)} className="block w-full py-4 text-center font-bold text-dark bg-primary hover:bg-primary-dark uppercase tracking-widest transition-all">
                                        Get A Quote
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
};

export default Navbar;
