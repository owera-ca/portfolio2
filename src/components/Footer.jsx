import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-dark text-white/60 pt-20 pb-10 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <img src="/logo.png" alt="Owera" className="h-24 w-auto mb-6" />
                        <p className="mb-6 leading-relaxed max-w-sm font-light text-lg text-white/50">
                            Premium software consulting. We build the digital future with precision and elegance.
                        </p>
                        <p className="text-sm text-white/30">
                            An umbrella company of 16472320 Canada Inc.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm border-b-2 border-primary inline-block pb-1">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><a href="/services" className="hover:text-primary transition-colors block hover:translate-x-1 duration-300">Services</a></li>
                            <li><a href="/projects" className="hover:text-primary transition-colors block hover:translate-x-1 duration-300">Projects</a></li>
                            <li><a href="/about" className="hover:text-primary transition-colors block hover:translate-x-1 duration-300">About Us</a></li>
                            <li><a href="/contact" className="hover:text-primary transition-colors block hover:translate-x-1 duration-300">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm border-b-2 border-primary inline-block pb-1">Connect</h4>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4 group cursor-pointer">
                                <div className="p-2 bg-white/5 text-primary group-hover:bg-primary group-hover:text-dark transition-all duration-300">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-wide text-white/40 mb-1">Email Us</p>
                                    <a href="mailto:sandeep.kumar@owera.ca" className="text-white hover:text-primary transition-colors font-medium">
                                        sandeep.kumar@owera.ca
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4 group cursor-pointer">
                                <div className="p-2 bg-white/5 text-primary group-hover:bg-primary group-hover:text-dark transition-all duration-300">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-wide text-white/40 mb-1">Call Us</p>
                                    <a href="tel:6473950215" className="text-white hover:text-primary transition-colors font-medium">
                                        647 395 0215
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/30">
                    <p>&copy; {new Date().getFullYear()} Owera. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
