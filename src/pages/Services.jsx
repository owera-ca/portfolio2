import { motion } from 'framer-motion';
import { Database, Layout, Smartphone, Cloud, Shield, Terminal } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Layout size={32} />,
            title: "Web Development",
            desc: "Modern, responsive websites and web applications using React, Next.js, and other leading frameworks."
        },
        {
            icon: <Smartphone size={32} />,
            title: "Mobile App Development",
            desc: "Native and cross-platform mobile solutions for iOS and Android.",
        },
        {
            icon: <Database size={32} />,
            title: "Backend Architecture",
            desc: "Robust API development, database design, and server-side logic."
        },
        {
            icon: <Cloud size={32} />,
            title: "Cloud Solutions",
            desc: "Deployment, scaling, and management of cloud infrastructure on AWS, Azure, or GCP."
        },
        {
            icon: <Shield size={32} />,
            title: "Security Audits",
            desc: "Identifying vulnerabilities and securing your digital assets."
        },
        {
            icon: <Terminal size={32} />,
            title: "DevOps & CI/CD",
            desc: "Streamlining your development pipeline for faster, more reliable releases."
        }
    ];

    return (
        <div className="min-h-screen py-32 container mx-auto px-4 font-sans selection:bg-primary selection:text-white">
            <div className="text-center mb-24 max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold text-dark mb-8 tracking-tighter">
                    Our <span className="text-primary">Services</span>.
                </h1>
                <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                    Comprehensive software engineering solutions tailored to complex business challenges. Built for scale, security, and speed.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group p-10 bg-white border border-gray-100 hover:border-primary transition-all duration-300 hover:shadow-tekup hover:-translate-y-2 relative"
                    >
                        <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full -mr-10 -mt-10 transition-all group-hover:bg-primary/10"></div>

                        <div className="w-16 h-16 bg-light-alt rounded-none flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm border border-gray-100">
                            {service.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                        <p className="text-gray-600 leading-relaxed max-w-xs">{service.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Services;
