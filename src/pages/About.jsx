import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();
    return (
        <div className="min-h-screen py-32 container mx-auto px-4 font-sans text-gray-800">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto"
            >
                <h1 className="text-5xl md:text-7xl font-bold mb-8 text-center text-gray-900 tracking-tighter">{t('about.title')} <span className="text-primary">{t('about.titleHighlight')}</span>.</h1>

                <div className="prose prose-lg mx-auto bg-white p-8 md:p-12 shadow-lg border-t-4 border-primary">
                    <p className="text-xl leading-relaxed text-gray-600 mb-8">
                        {t('about.intro1')} <span className="text-gray-900 font-semibold">{t('about.company')}</span>.
                        {t('about.intro2')} <span className="text-primary italic font-medium">"{t('about.slogan')}"</span>.
                    </p>

                    <div className="grid md:grid-cols-2 gap-12 my-12">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('about.missionTitle')}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {t('about.missionDesc')}
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('about.approachTitle')}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {t('about.approachDesc')}
                            </p>
                        </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                        {t('about.footer')}
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default About;
