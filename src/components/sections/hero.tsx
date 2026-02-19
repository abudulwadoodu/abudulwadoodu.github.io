"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin } from "lucide-react";

export function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center section-padding pt-32">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-primary text-sm font-medium mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                        </span>
                        Available for new opportunities
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Abdul Wadood
                    </h1>
                    <h2 className="text-xl md:text-2xl text-secondary mb-8 font-medium">
                        Senior Full Stack Developer | Azure | React | Node.js
                    </h2>
                    <p className="text-lg text-secondary mb-10 max-w-lg leading-relaxed">
                        Building secure, scalable, and impactful digital solutions. Specialized in Azure Cloud and modern web architectures.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="#projects"
                            className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-white font-medium hover:bg-indigo-700 transition-colors gap-2"
                        >
                            View Projects <ArrowRight size={18} />
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center h-12 px-8 rounded-full border border-slate-200 dark:border-slate-800 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                        >
                            Contact Me
                        </a>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            className="inline-flex items-center justify-center h-12 px-8 rounded-full border border-slate-200 dark:border-slate-800 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors gap-2"
                        >
                            <Download size={18} /> Resume
                        </a>
                    </div>

                    <div className="mt-10 flex items-center gap-2 text-secondary text-sm">
                        <MapPin size={16} /> Trivandrum, India
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative hidden lg:block"
                >
                    <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/20 to-primary/20 blur-3xl rounded-full"></div>
                    <div className="relative aspect-square rounded-3xl overflow-hidden glass border-2 border-white/20 dark:border-slate-800/50 flex items-center justify-center">
                        {/* Placeholder for an image or animated tech stack icons */}
                        <div className="text-primary font-bold text-9xl opacity-10 select-none">
                            AW
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
