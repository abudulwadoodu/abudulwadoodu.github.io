"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Linkedin, Github } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="section-padding">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
                        <p className="text-secondary text-lg mb-10 leading-relaxed">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-primary">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <div className="text-sm font-medium text-secondary">Email</div>
                                    <div className="text-lg font-bold">alabdulwadood@gmail.com</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-primary">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <div className="text-sm font-medium text-secondary">Phone</div>
                                    <div className="text-lg font-bold">+91 9207 103 200</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-primary">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <div className="text-sm font-medium text-secondary">Location</div>
                                    <div className="text-lg font-bold">Trivandrum, India</div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <div className="text-sm font-medium text-secondary mb-4 uppercase tracking-wider">Social Channels</div>
                            <div className="flex gap-4">
                                <a href="https://www.linkedin.com/in/alabdulwadood" className="p-3 rounded-xl glass hover:text-primary transition-colors">
                                    <Linkedin size={24} />
                                </a>
                                <a href="https://github.com/abudulwadoodu" className="p-3 rounded-xl glass hover:text-primary transition-colors">
                                    <Github size={24} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass p-8 md:p-10 rounded-3xl shadow-xl"
                    >
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full h-12 px-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full h-12 px-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full h-12 px-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                    placeholder="Project Inquiry"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    className="w-full p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full h-14 rounded-xl bg-primary text-white font-bold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20"
                            >
                                Send Message <Send size={20} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
