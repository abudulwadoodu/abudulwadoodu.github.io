"use client";

import { motion } from "framer-motion";
import {
    Code2,
    Server,
    Cloud,
    Database,
    Layout,
    Wrench,
    Smartphone
} from "lucide-react";

const skillCategories = [
    {
        title: "Frontend",
        icon: <Layout className="text-blue-500" />,
        skills: ["ReactJS", "Angular", "TypeScript", "Flutter", "Tailwind CSS", "Next.js"],
    },
    {
        title: "Backend",
        icon: <Server className="text-green-500" />,
        skills: ["Node.js", "NestJS", "Express", "Socket.IO", "PHP (Yii, CodeIgniter)"],
    },
    {
        title: "Cloud",
        icon: <Cloud className="text-sky-500" />,
        skills: ["Azure (AD B2C, Functions, Insights)", "Communication Services", "AWS", "GCP"],
    },
    {
        title: "Architecture",
        icon: <Code2 className="text-purple-500" />,
        skills: ["Microservices", "Micro Frontend", "Nx Monorepo", "Scalable Apps"],
    },
    {
        title: "Databases",
        icon: <Database className="text-orange-500" />,
        skills: ["PostgreSQL", "MySQL", "Firebase", "SQL Server", "MongoDB"],
    },
    {
        title: "Tools",
        icon: <Wrench className="text-slate-500" />,
        skills: ["Azure DevOps", "GitHub", "Webpack", "JMeter", "Google Vision API", "Payment Integrations"],
    },
];

export function Skills() {
    return (
        <section id="skills" className="section-padding">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
                    <p className="text-secondary max-w-2xl mx-auto">
                        A comprehensive set of tools and technologies I've mastered over 12+ years in the industry.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="p-8 rounded-2xl glass hover:shadow-xl transition-all group border-b-4 border-b-transparent hover:border-b-primary"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-500/10 transition-colors">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold">{category.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-sm font-medium hover:bg-primary hover:text-white transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
