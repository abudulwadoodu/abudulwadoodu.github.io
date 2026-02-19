"use client";

import { motion } from "framer-motion";
import { Award, Code2, HeartHandshake, Users } from "lucide-react";

const highlights = [
    {
        icon: <Code2 className="text-indigo-500" />,
        title: "Expertise",
        description: "12+ years of full stack mastery in React, Node, and Azure.",
    },
    {
        icon: <HeartHandshake className="text-indigo-500" />,
        title: "Social Impact",
        description: "Passionate about using tech for social & economic well-being.",
    },
    {
        icon: <Award className="text-indigo-500" />,
        title: "Award Winning",
        description: "5-time Hi5 Award winner and Employee of the Month nominee.",
    },
    {
        icon: <Users className="text-indigo-500" />,
        title: "Mentor",
        description: "Active mentor and collaborator within tech communities.",
    },
];

export function About() {
    return (
        <section id="about" className="section-padding bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
                        <div className="space-y-6 text-lg text-secondary leading-relaxed">
                            <p>
                                Senior Full Stack Developer with 12+ years of experience delivering high-performance, secure, and scalable applications across React, Angular, Node.js, NestJS, and Azure.
                            </p>
                            <p>
                                Strong expertise in Azure AD B2C authentication, CI/CD pipelines using Azure DevOps, microservices architecture, and performance optimization. Experienced in building real-time systems, cloud-native applications, and modern frontend interfaces.
                            </p>
                            <p>
                                Beyond code, I am passionate about using technology as a force for social good. I believe in continuous learning, mentoring, and fostering collaborative team environments.
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {highlights.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="p-6 rounded-2xl glass hover:shadow-lg transition-all"
                            >
                                <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center mb-4">
                                    {item.icon}
                                </div>
                                <h3 className="font-bold mb-2">{item.title}</h3>
                                <p className="text-sm text-secondary leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
