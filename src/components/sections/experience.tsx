"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

const experiences = [
    {
        company: "InApp Information Technologies",
        role: "Systems Analyst",
        period: "2019 – Present",
        description: [
            "Implemented Azure AD B2C authentication with custom policies & MSAL.",
            "Optimized Client Credentials & On-Behalf-Of flows.",
            "Built CI/CD pipelines with Azure DevOps.",
            "Improved UI performance by 75% and reduced vulnerabilities by 55%.",
            "Mentored junior developers and led technical initiatives.",
        ],
    },
    {
        company: "Bteem Software",
        role: "Senior Software Engineer",
        period: "2016 – 2019",
        description: [
            "Developed full-stack applications with React and Node.js.",
            "Built offline-first solutions using Firebase for real-time data sync.",
            "Architected scalable cloud-native applications.",
        ],
    },
    {
        company: "Techno Alliance India",
        role: "Software Engineer",
        period: "2013 – 2016",
        description: [
            "Built real-time student tracking system using AngularJS and Node.js.",
            "Reduced system load time from 1 minute to under 1 second.",
            "Managed PostgreSQL databases and real-time Socket.IO feeds.",
        ],
    },
];

export function Experience() {
    return (
        <section id="experience" className="section-padding bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Journey</h2>
                    <p className="text-secondary max-w-lg mx-auto">
                        A timeline of my professional roles and key impacts in the software industry.
                    </p>
                </motion.div>

                <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent dark:before:via-slate-700">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            {/* Dot */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-slate-900 bg-slate-100 dark:bg-slate-800 text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                <Briefcase size={18} />
                            </div>

                            {/* Content */}
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="font-bold text-xl">{exp.role}</h3>
                                    <time className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-primary py-1 px-2 rounded-full bg-indigo-50 dark:bg-indigo-500/10">
                                        <Calendar size={12} /> {exp.period}
                                    </time>
                                </div>
                                <div className="text-indigo-600 dark:text-indigo-400 font-medium mb-4">{exp.company}</div>
                                <ul className="space-y-2">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="flex gap-2 text-sm text-secondary">
                                            <ChevronRight size={16} className="shrink-0 text-primary pt-1" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-4 sm:hidden">
                                    <time className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-primary py-1 px-2 rounded-full bg-indigo-50 dark:bg-indigo-500/10">
                                        {exp.period}
                                    </time>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
