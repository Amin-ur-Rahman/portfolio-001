"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "StyleDecor",
    subtitle: "Decoration and event managing Platform",
    tags: ["DESIGN", "FRONTEND", "BACKEND"],
    image: "/style-decor.png",
    link: "https://style-decor-client-wheat.vercel.app/",
  },
  {
    title: "GameVerse",
    subtitle: "Gaming platform",
    tags: ["DESIGN", "FRONTEND"],
    image: "/game-verse.png",
    link: "https://game-verse-react-app.vercel.app/",
  },
  {
    title: "Local Food Lovers",
    subtitle: "Local Food lovers network",
    tags: ["DESIGN", "FRONTEND", "BACKEND"],
    image: "/foodlovers.png",
    link: "https://effortless-madeleine-66699e.netlify.app/",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center px-4 py-20 relative overflow-hidden"
    >
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <span className="text-[12rem] font-bold leading-none">PROJECTS</span>
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm mb-2">Some Of My Most Recent Projects</p>
          <h2 className="text-6xl md:text-7xl font-bold mb-12">
            My Featured Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  rotate: index === 1 ? 0 : index === 0 ? -2 : 2,
                }}
                className="border-2 border-foreground rounded-lg overflow-hidden block cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                  <p className="text-sm mb-4">{project.subtitle}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 border border-foreground rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

