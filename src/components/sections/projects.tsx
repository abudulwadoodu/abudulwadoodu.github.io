"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Globe } from "lucide-react";

const projects = [
    {
        title: "Metaltech – Safety Guardrail Software",
        description: "Enterprise-grade safety guardrail management system with complex structural calculations and reporting.",
        tech: ["Azure AD B2C", "React", "NestJS", "PostgreSQL"],
        role: "Full Stack Developer",
        link: "#",
    },
    {
        title: "Azure DevOps Project Health Dashboard",
        description: "Automated dashboard for tracking CI/CD health, build durations, and deployment stability across multiple repositories.",
        tech: ["Azure Functions", "SQL", "CI/CD", "Azure DevOps API"],
        role: "Backend Lead",
        link: "#",
    },
    {
        title: "PayFlick – Accounting Software",
        description: "A comprehensive accounting and financial management solution for small to medium enterprises.",
        tech: ["Yii", "Node.js", "MySQL", "Firebase"],
        role: "Full Stack Developer",
        link: "#",
    },
    {
        title: "TrackSchoolBus – Real-time Tracking",
        description: "IoT-integrated student tracking system with real-time GPS feeds and notification systems.",
        tech: ["AngularJS", "Node.js", "PostgreSQL", "Socket.IO"],
        role: "Full Stack Developer",
        link: "#",
    },
    {
        title: "ThriftSmart – Thrifting Platform",
        description: "A social-purpose platform focused on sustainability and circular economy using vision-based item categorization.",
        tech: ["AppSheets", "Google Vision API", "Cloud Functions"],
        role: "Founder & Full Stack Developer",
        link: "#",
        impact: "Social Impact & Sustainability",
    },
];

export function Projects() {
    return (
        <section id="projects" className="section-padding">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-secondary max-w-2xl mx-auto">
                        A selection of my most impactful work, spanning enterprise software, cloud-native dashboards, and social-purpose applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group glass rounded-2xl overflow-hidden flex flex-col hover:shadow-2xl transition-all border-t-2 border-t-transparent hover:border-t-primary"
                        >
                            <div className="p-8 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 text-primary">
                                        <Globe size={24} />
                                    </div>
                                    <div className="flex gap-3">
                                        <a href={project.link} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-secondary hover:text-primary">
                                            <Github size={18} />
                                        </a>
                                        <a href={project.link} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-secondary hover:text-primary">
                                            <ExternalLink size={18} />
                                        </a>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-sm text-secondary mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                                {project.impact && (
                                    <div className="mb-6 px-3 py-1 rounded-md bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-bold inline-block self-start">
                                        {project.impact}
                                    </div>
                                )}

                                <div className="mt-auto">
                                    <div className="text-xs font-semibold text-secondary uppercase tracking-wider mb-3">Tech Stack</div>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t) => (
                                            <span key={t} className="text-[10px] sm:text-xs px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 font-medium">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
