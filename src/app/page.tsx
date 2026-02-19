import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Achievements } from "@/components/sections/achievements";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Contact />

      {/* Footer */}
      <footer className="py-20 text-center border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-primary bg-clip-text text-transparent mb-4">
            AW.
          </div>
          <p className="text-secondary text-sm mb-8 max-w-sm mx-auto">
            Senior Full Stack Developer specializing in secure, scalable, and impactful digital solutions.
          </p>
          <div className="text-secondary text-xs uppercase tracking-widest">
            © {new Date().getFullYear()} Abdul Wadood. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
