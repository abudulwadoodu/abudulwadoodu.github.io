"use client";

import { motion } from "framer-motion";
import { Award, Star, Users, Lightbulb } from "lucide-react";

const achievements = [
    {
        icon: <Award className="text-yellow-500" />,
        title: "5x Hi5 Award Winner",
        description: "Recognized multiple times for exceptional performance and project contributions.",
    },
    {
        icon: <Star className="text-purple-500" />,
        title: "Employee of the Month",
        description: "Nominated for consistent excellence and leadership in software development.",
    },
    {
        icon: <Users className="text-blue-500" />,
        title: "Tech Communities",
        description: "Initiated and led internal tech communities to foster innovation and learning.",
    },
    {
        icon: <Lightbulb className="text-orange-500" />,
        title: "Knowledge Sharing",
        description: "Conducted numerous technical workshops and knowledge-sharing sessions for peers.",
    },
];

export function Achievements() {
    return (
        <section id="achievements" className="section-padding bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements & Recognition</h2>
                    <p className="text-secondary max-w-2xl mx-auto">
                        Milestones and accolades that reflect my commitment to excellence and community impact.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-8 glass rounded-2xl text-center hover:bg-white dark:hover:bg-slate-800 transition-colors border-b-4 border-b-transparent hover:border-b-yellow-500"
                        >
                            <div className="w-16 h-16 rounded-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center mx-auto mb-6 shadow-sm">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                            <p className="text-sm text-secondary leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
