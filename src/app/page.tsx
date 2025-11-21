"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 via-slate-800 to-black text-gray-100 overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="w-full min-h-screen flex flex-col justify-center items-center text-center px-6 py-32 space-y-6 relative">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-white/90 to-white/60 bg-clip-text text-transparent"
        >
          MADHAN 
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
        >
          Full-Stack Next.js Developer | AI-Agent, SaaS Builder
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex gap-4 justify-center"
        >
          <Button asChild size="lg">
            <a href="#projects">View Projects</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#contact">Contact Me</a>
          </Button>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section-container py-24">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
          About Me
        </h2>

        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 items-start">
          <Card className="p-0">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold text-2xl">
                  MM
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Hi, I’m Madhan</h3>
                  <p className="mt-2 text-sm text-gray-300">
                    I build delightful web apps and AI-powered tools. I focus on clean interfaces, performant frontends, and reliable backends. My work blends design and engineering to ship value quickly.
                  </p>
                  <div className="mt-4 flex gap-3">
                    <Button asChild>
                      <a href="#projects">View Projects</a>
                    </Button>
                    <Button asChild variant="outline">
                      <a href="https://www.notion.so/Resume-224ba69e97258008b82bf6cc4f27db28" target="_blank" rel="noreferrer">Resume</a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="p-0">
            <CardContent className="p-6">
              <h4 className="text-lg font-medium">Skills & Tools</h4>
              <p className="mt-2 text-sm text-gray-300">A concise list of core technologies I use daily.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {[
                  'React','Next.js','TypeScript','Tailwind','Framer','Node.js','Express','Prisma','Postgres','MongoDB','Docker','AWS','Stripe','Jest'
                ].map((s) => (
                  <span key={s} className="inline-flex items-center px-3 py-1 rounded-full bg-white/6 text-sm text-gray-200">{s}</span>
                ))}
              </div>

              <div className="mt-6">
                <h5 className="text-sm font-semibold text-gray-200">Experience Highlights</h5>
                <ul className="mt-3 space-y-2 text-sm text-gray-300">
                  <li>Built SaaS product with auth & Stripe integrations.</li>
                  <li>Deployed production apps on AWS with CI/CD.</li>
                  <li>Mentored students and shipped freelance projects.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="section-container w-full py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12">
          {[
            {
    title: 'Magic Slides – PPTs from a Prompt',
    desc: 'AI-powered presentation generator that creates and edits slide decks instantly from natural language prompts using Gemini LLM and Google Search API.',
    link: 'https://magic-slides-1l22.vercel.app/',
    github: 'https://github.com/madhan-gunapati/magic-slides',
  },
  {
    title: 'Smart Todo – Local AI Task Manager',
    desc: 'Full-stack intelligent todo app that uses a local LLM (via LM Studio) to modify task priorities and deadlines based on user prompts. Testable locally with screenshots in README.',
    link: 'https://smart-todo-pied.vercel.app/',
    github: 'https://github.com/madhan-gunapati/smart-todo-fullstack',
  },{
    title: 'GradeGenie – AI Academic SaaS',
    desc: 'AI-based assignment grading platform using Google PaLM API, NextAuth, and Stripe integration.',
    link: 'https://m-32-ov42.vercel.app/',
    github: 'https://github.com/madhan-gunapati/m-32',
  },
  {
    title: 'URL Shortener',
    desc: 'Scalable short-link platform built with Prisma + PostgreSQL, deployed on AWS with Nginx reverse proxy.',
    link: 'http://ec2-13-48-194-218.eu-north-1.compute.amazonaws.com/',
    github: 'https://github.com/madhan-gunapati/bitlyBE',
  },
  
  {
    title: 'Diet Fusion',
    desc: 'Personalized diet recommendation web app for a startup. Designed complete UI/UX and hosted on AWS.',
    link: 'https://www.dietfusion.in/',
    github: 'https://github.com/madhan-gunapati/Diet-Fusion',
  },
  {
    title: 'Story Viewer',
    desc: 'Anonymous Instagram story viewer built using public APIs with a minimal, responsive interface.',
    link: 'https://story-viewer-six.vercel.app/',
    github: 'https://github.com/madhan-gunapati/story-viewer',
  },
  {
    title: 'Framer Websites',
    desc: 'Designed and built creator websites like Jasti & FoodForShot using Framer for sleek, interactive design.',
    link: 'https://jasti.framer.website/',
    github: 'https://github.com/madhan-gunapati',
  },
  {
    title: 'Tasty Kitchens',
    desc: 'Responsive food ordering platform built with React and Tailwind CSS featuring clean UI and smooth UX.',
    link: 'https://tasty-kitchens-weld.vercel.app/',
    github: 'https://github.com/madhan-gunapati/tasty-kitchens',
  },
          ].map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="relative"
            >
              <Card className="rounded-2xl p-0 overflow-hidden bg-white/5 backdrop-blur-md border border-white/6 hover:scale-[1.02] transition-transform duration-300">
                <CardContent className="p-6">
                  <CardTitle className="text-lg text-blue-200">{p.title}</CardTitle>
                  <CardDescription className="mt-2 text-sm text-gray-300">{p.desc}</CardDescription>
                </CardContent>
                <CardFooter className="px-6 py-4 flex items-center justify-between">
                  <div className="text-xs text-gray-400">Featured</div>
                  <div className="flex gap-3">
                    <Button asChild size="sm">
                      <a href={p.link} target="_blank" rel="noreferrer">Live</a>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <a href={p.github} target="_blank" rel="noreferrer">GitHub</a>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="section-container py-24 text-center space-y-8">
        <h2 className="text-4xl font-semibold bg-gradient-to-r from-blue-400 to-pink-400 text-transparent bg-clip-text">
          Experience
        </h2>
        <div className="max-w-4xl mx-auto text-gray-300 text-lg space-y-4">
          <p>
            <strong>💼 Freelance Developer</strong> — Delivered web apps for startups like Diet Fusion using AWS and Next.js.
          </p>
          <p>
            <strong>🎨 Graphic Designer</strong> — Created marketing creatives and social media designs for a coding institute.
          </p>
          <p>
            <strong>🚀 Startup Founder</strong> — Built and scaled a profitable rental startup during college.
          </p>
          <p>
            <strong>👨‍🏫 Programming Mentor</strong> — Helped students transition to developer and analyst roles through guided learning.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="section-container py-24 text-center space-y-6">
        <h2 className="text-4xl font-semibold mb-4 bg-gradient-to-r from-pink-400 to-blue-400 text-transparent bg-clip-text">
          Get in Touch
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Open to collaborations, freelance projects, or just a chat about SaaS, UI/UX, or cloud infrastructure.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <Button asChild size="lg">
            <a href="mailto:madhanreddy400@gmail.com">Email Me</a>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <a href="https://github.com/madhan-gunapati" target="_blank" rel="noreferrer">GitHub</a>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <a href="https://www.linkedin.com/in/madhanmohan-reddy-gunapati-12aba71b6/" target="_blank" rel="noreferrer">LinkedIn</a>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <a href="https://x.com/MADHANMOHAN400" target="_blank" rel="noreferrer">Twitter</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="https://www.notion.so/Resume-224ba69e97258008b82bf6cc4f27db28" target="_blank" rel="noreferrer">Resume</a>
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-sm text-gray-500 border-t border-gray-800 text-center w-full">
        © {new Date().getFullYear()} GUNAPATI MADHAN MOHAN REDDY. Built with ❤️ using Next.js & Tailwind CSS.
      </footer>
    </main>
  );
}
