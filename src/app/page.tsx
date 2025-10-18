'use client';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-100 overflow-hidden">
      {/* HERO SECTION */}
      <section className="w-full min-h-screen flex flex-col justify-center items-center text-center px-6 py-32 space-y-6 relative">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
           MADHAN MOHAN 
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
        >
          Full-Stack Next.js Developer  | AI-Agent, SaaS Builder
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex gap-4 justify-center"
        >
          <a href="#projects" className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition font-medium shadow-lg shadow-blue-500/30">
            View Projects
          </a>
          <a href="#contact" className="px-6 py-3 rounded-full border border-gray-400 hover:bg-gray-800 transition font-medium">
            Contact Me
          </a>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section-container text-center space-y-6 py-24">
        <h2 className="text-4xl font-semibold mb-8 bg-gradient-to-r from-blue-400 to-pink-500 text-transparent bg-clip-text">
          About Me
        </h2>
        <div className="max-w-4xl mx-auto text-gray-300 space-y-4 text-lg">
          <p>
            I’m a versatile developer skilled across the full stack — from crafting immersive UIs with 
            <span className="text-blue-400 font-medium"> React, Next.js, and Tailwind</span> to building scalable backends 
            using <span className="text-pink-400 font-medium">Node.js, Express, Prisma, PostgreSQL</span>, and deploying apps on AWS.
          </p>
          <p>
            I’ve freelanced for startups, built SaaS tools like <strong>GradeGenie</strong>, mentored students, and even scaled a college startup to profitability.
            My focus is on merging creativity with technical depth to deliver meaningful digital products.
          </p>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="section-container w-full py-24 text-center">
        <h2 className="text-4xl font-semibold mb-12 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12">
          {[
            {
              title: 'GradeGenie – AI Academic SaaS',
              desc: 'AI-based assignment grading with Google PaLM API, NextAuth, and Stripe integration.',
              link: 'https://m-32-ov42.vercel.app/',
              github: 'https://github.com/madhan-gunapati/m-32',
            },
            {
              title: 'URL Shortener',
              desc: 'Scalable short-link platform with Prisma + PostgreSQL, deployed on AWS + Nginx.',
              link: 'http://ec2-13-48-194-218.eu-north-1.compute.amazonaws.com/',
              github: 'https://github.com/madhan-gunapati/bitlyBE',
            },
            {
              title: 'Diet Fusion',
              desc: 'Personalized diet web app for a startup. Designed UI/UX and hosted on AWS.',
              link: 'https://www.dietfusion.in/',
              github: 'https://github.com/madhan-gunapati/Diet-Fusion',
            },
            {
              title: 'Story Viewer',
              desc: 'Anonymous Instagram story viewer built using public APIs with responsive UI.',
              link: 'https://story-viewer-six.vercel.app/',
              github: 'https://github.com/madhan-gunapati/story-viewer',
            },
            {
              title: 'Framer Websites',
              desc: 'Designed stunning creator websites like Jasti & FoodForShot using Framer.',
              link: 'https://jasti.framer.website/',
              github: 'https://github.com/madhan-gunapati',
            },
            {
              title: 'Tasty Kitchens',
              desc: 'A clean, responsive food ordering platform built with React and Tailwind.',
              link: 'https://tasty-kitchens-weld.vercel.app/',
              github: 'https://github.com/madhan-gunapati/tasty-kitchens',
            },
          ].map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:scale-[1.03] transition-transform duration-300 flex flex-col justify-between shadow-md hover:shadow-blue-500/20"
            >
              <div>
                <h3 className="font-semibold text-xl text-blue-300 mb-2">{p.title}</h3>
                <p className="text-gray-300 mb-4">{p.desc}</p>
              </div>
              <div className="flex justify-between text-sm text-blue-400">
                <a href={p.link} target="_blank" className="hover:underline">
                  Live →
                </a>
                <a href={p.github} target="_blank" className="hover:underline">
                  GitHub →
                </a>
              </div>
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
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          <a
            href="mailto:madhanreddy400@gmail.com"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg shadow-blue-500/30 transition"
          >
            Email Me
          </a>
          <a
            href="https://github.com/madhan-gunapati"
            target="_blank"
            className="px-8 py-3 border border-gray-500 hover:bg-gray-800 rounded-full transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/madhanmohan-reddy-gunapati-12aba71b6/"
            target="_blank"
            className="px-8 py-3 border border-gray-500 hover:bg-gray-800 rounded-full transition"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-sm text-gray-500 border-t border-gray-800 text-center w-full">
        © {new Date().getFullYear()} GUNAPATI MADHAN MOHAN REDDY. Built with ❤️ using Next.js & Tailwind CSS.
      </footer>
    </main>
  );
}
