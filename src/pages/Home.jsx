import { motion } from 'framer-motion';
import { ArrowRight, Code, Zap, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="overflow-hidden font-sans bg-white selection:bg-primary selection:text-white">
            {/* Hero Section - Sharp & Tech-Focused */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-dark">
                {/* Abstract Tech Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-dark via-transparent to-dark/80"></div>

                {/* Animated Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="container mx-auto px-4 z-10 relative text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-7xl md:text-9xl font-bold mb-8 text-white tracking-tighter leading-tight">
                            OWERA<span className="text-primary">.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 font-medium tracking-widest mb-10 uppercase">
                            Premium Software <span className="text-primary">Engineering</span>
                        </p>
                        <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-14 leading-relaxed font-light">
                            We engineer high-performance digital solutions with precision and elegance. Transforming complex challenges into scalable reality.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link
                                to="/contact"
                                className="group relative px-10 py-4 bg-primary text-white font-bold uppercase tracking-wider hover:bg-primary-dark transition-all shadow-tekup hover:shadow-tekup-hover hover:-translate-y-1 overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    Start a Project <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Link>
                            <Link
                                to="/projects"
                                className="group px-10 py-4 border border-white/20 hover:border-primary text-white font-bold uppercase tracking-wider hover:text-primary transition-all duration-300"
                            >
                                View Portfolio
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Grid - Clean & Sharp */}
            <section className="py-32 bg-white relative">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center mb-20">
                        <h2 className="text-4xl font-bold text-dark mb-6 tracking-tight">Precision Engineering</h2>
                        <p className="text-gray-500 text-lg">Built for speed, scalability, and impact.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Code size={40} />,
                                title: "Custom Development",
                                desc: "Tailored software solutions built with cutting-edge technologies.",
                                delay: 0
                            },
                            {
                                icon: <Zap size={40} />,
                                title: "High Performance",
                                desc: "Speed and efficiency at the core of every application we build.",
                                delay: 0.1
                            },
                            {
                                icon: <Globe size={40} />,
                                title: "Scalable Systems",
                                desc: "Architectures designed to grow seamlessly with your business.",
                                delay: 0.2
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: feature.delay, duration: 0.5 }}
                                className="group p-10 bg-light-alt border border-light-border hover:border-primary transition-all duration-300 hover:shadow-tekup hover:-translate-y-2 relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-500"></div>
                                <div className="mb-8 p-4 bg-white inline-block shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-dark mb-4 group-hover:text-primary transition-colors">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
