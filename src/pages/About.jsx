import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="pt-10 pb-20 container mx-auto px-4 font-sans text-gray-800">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto"
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-primary tracking-tight">About Owera</h1>

                <div className="prose prose-lg mx-auto bg-white p-8 md:p-12 shadow-lg border-t-4 border-primary">
                    <p className="text-xl leading-relaxed text-gray-600 mb-8">
                        Owera is a dedicated software consulting firm operating under the umbrella of <span className="text-gray-900 font-semibold">16472320 Canada Inc</span>.
                        We specialize in delivering high-impact technological solutions that embody our philosophy: <span className="text-primary italic font-medium">"Much in Little"</span>.
                    </p>

                    <div className="grid md:grid-cols-2 gap-12 my-12">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To simplify complexity. We believe that the most powerful software is capable yet intuitive, robust yet efficient. We strive to deliver maximum value with minimal friction.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Approach</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We combine technical expertise with deep industry knowledge to solve real-world problems. From initial concept to final deployment, we work closely with our clients to ensure success.
                            </p>
                        </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                        Based in Canada, we serve clients globally who demand excellence in their digital products. Whether you need a complete digital transformation or a specific software solution, Owera is your partner in innovation.
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default About;
