import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Code, Zap, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const { t } = useTranslation();
    return (
        <div className="font-sans bg-light selection:bg-primary selection:text-dark">
            {/* Minimalist Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center bg-white">
                <div className="container mx-auto px-4 z-10 relative text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-7xl md:text-9xl font-bold mb-6 text-dark tracking-tighter leading-none">
                            {t('hero.title')}<span className="text-primary">.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-500 font-medium tracking-widest mb-12 uppercase">
                            {t('hero.subtitle')} <span className="text-primary font-bold">{t('hero.subtitleHighlight')}</span>
                        </p>
                        <p className="max-w-xl mx-auto text-lg text-gray-600 mb-16 leading-relaxed font-light">
                            {t('hero.desc')}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link
                                to="/contact"
                                className="px-10 py-4 bg-primary text-dark font-bold uppercase tracking-wider hover:bg-primary-dark transition-colors shadow-minimal hover:shadow-minimal-hover hover:-translate-y-1"
                            >
                                {t('hero.startProject')}
                            </Link>
                            <Link
                                to="/projects"
                                className="px-10 py-4 border-2 border-gray-100 hover:border-primary text-dark font-bold uppercase tracking-wider hover:text-primary transition-all duration-300"
                            >
                                {t('hero.viewPortfolio')}
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Grid - Clean & Minimal */}
            <section className="py-32 bg-white relative">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center mb-24">
                        <h2 className="text-4xl font-bold text-dark mb-6 tracking-tight">{t('features.title')}</h2>
                        <div className="w-20 h-1 bg-primary mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                icon: <Code size={32} />,
                                title: t('features.customDev'),
                                desc: t('features.customDevDesc'),
                                delay: 0
                            },
                            {
                                icon: <Zap size={32} />,
                                title: t('features.highPerf'),
                                desc: t('features.highPerfDesc'),
                                delay: 0.1
                            },
                            {
                                icon: <Globe size={32} />,
                                title: t('features.scalable'),
                                desc: t('features.scalableDesc'),
                                delay: 0.2
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: feature.delay, duration: 0.5 }}
                                className="group p-8 bg-white border border-gray-100 hover:border-primary transition-colors duration-300"
                            >
                                <div className="mb-6 text-dark group-hover:text-primary transition-colors duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-dark mb-4">{feature.title}</h3>
                                <p className="text-gray-500 leading-relaxed text-sm">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
