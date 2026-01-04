import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="min-h-screen py-32 container mx-auto px-4 font-sans selection:bg-primary selection:text-white">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="max-w-6xl mx-auto"
            >
                <div className="text-center mb-24">
                    <h1 className="text-5xl md:text-7xl font-bold text-dark mb-8 tracking-tighter">
                        Get in <span className="text-primary">Touch</span>.
                    </h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        Ready to engineer your future? Let's build something extraordinary together.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div className="bg-white p-10 border border-gray-100 relative group overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-12 -mt-12 transition-all group-hover:bg-primary/10"></div>
                            <h3 className="text-2xl font-bold text-dark mb-8 tracking-tight">Contact Details</h3>

                            <div className="space-y-8">
                                <div className="flex items-start space-x-6 group/item">
                                    <div className="bg-light-alt p-4 text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors duration-300 border border-gray-100">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-dark font-bold mb-2 uppercase text-sm tracking-wider">Email</h4>
                                        <a href="mailto:sandeep.kumar@owera.ca" className="text-gray-500 hover:text-primary transition-colors block font-medium text-lg">
                                            sandeep.kumar@owera.ca
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-6 group/item">
                                    <div className="bg-light-alt p-4 text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors duration-300 border border-gray-100">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-dark font-bold mb-2 uppercase text-sm tracking-wider">Phone</h4>
                                        <a href="tel:6473950215" className="text-gray-500 hover:text-primary transition-colors block font-medium text-lg">
                                            647 395 0215
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-6 group/item">
                                    <div className="bg-light-alt p-4 text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors duration-300 border border-gray-100">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-dark font-bold mb-2 uppercase text-sm tracking-wider">Location</h4>
                                        <p className="text-gray-500 font-medium text-lg">
                                            Canada
                                        </p>
                                        <p className="text-xs text-gray-400 mt-2 uppercase tracking-widest">
                                            16472320 Canada Inc.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-10 border border-gray-100 relative hover:shadow-tekup transition-all duration-300">
                        <h3 className="text-2xl font-bold text-dark mb-8 tracking-tight">Send a Message</h3>
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-light-alt border border-gray-200 p-4 text-dark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder-gray-400"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">Email</label>
                                    <input
                                        type="email"
                                        className="w-full bg-light-alt border border-gray-200 p-4 text-dark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder-gray-400"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">Message</label>
                                <textarea
                                    rows="4"
                                    className="w-full bg-light-alt border border-gray-200 p-4 text-dark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none placeholder-gray-400"
                                    placeholder="Tell us about your project..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-5 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-tekup hover:-translate-y-1 uppercase tracking-wider text-sm"
                            >
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;
