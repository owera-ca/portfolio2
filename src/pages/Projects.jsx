import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const { t } = useTranslation();
    const projects = [
        {
            title: t('projects.items.p1Title'),
            category: t('projects.items.p1Cat'),
            description: t('projects.items.p1Desc'),
            tech: ["React", "D3.js", "Node.js"],
            image: "linear-gradient(to bottom right, #1a1a1a, #2a2a2a)" // Placeholder gradient
        },
        {
            title: t('projects.items.p2Title'),
            category: t('projects.items.p2Cat'),
            description: t('projects.items.p2Desc'),
            tech: ["Next.js", "Stripe", "PostgreSQL"],
            image: "linear-gradient(to bottom right, #1a1a1a, #2a2a2a)"
        },
        {
            title: t('projects.items.p3Title'),
            category: t('projects.items.p3Cat'),
            description: t('projects.items.p3Desc'),
            tech: ["React", "TypeScript", "Python"],
            image: "linear-gradient(to bottom right, #1a1a1a, #2a2a2a)"
        }
    ];

    return (
        <div className="min-h-screen py-32 container mx-auto px-4 font-sans">
            <div className="text-center mb-24">
                <h1 className="text-5xl md:text-7xl font-bold text-dark mb-8 tracking-tighter">
                    {t('projects.title')} <span className="text-primary">{t('projects.titleHighlight')}</span>.
                </h1>
                <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                    {t('projects.subtitle')}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="bg-white group border border-gray-200 hover:border-primary transition-all duration-300 hover:shadow-tekup relative"
                    >
                        <div
                            className="h-64 w-full bg-dark relative overflow-hidden group-hover:opacity-90 transition-opacity"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent"></div>
                            {/* Placeholder for actual project image if needed, using gradient for now */}
                            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black opacity-50"></div>

                            <div className="absolute bottom-4 left-6">
                                <span className="text-primary text-xs font-bold uppercase tracking-widest bg-white/10 backdrop-blur-md px-2 py-1 border border-white/20 mb-2 inline-block">
                                    {project.category}
                                </span>
                            </div>
                        </div>

                        <div className="p-8">
                            <h3 className="text-2xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                            <p className="text-gray-500 mb-6 text-sm line-clamp-3 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="px-3 py-1 bg-light-alt border border-gray-100 text-xs font-bold text-gray-500 uppercase tracking-wide">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-6 pt-6 border-t border-gray-100">
                                <button className="text-dark hover:text-primary transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                                    <ExternalLink size={16} /> {t('projects.liveDemo')}
                                </button>
                                <button className="text-dark hover:text-primary transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                                    <Github size={16} /> {t('projects.sourceCode')}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
