"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-4 py-20 relative overflow-hidden"
    >
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <span className="text-[15rem] font-bold leading-none">ABOUT</span>
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm mb-2">Some Word About Me</p>
          <h2 className="text-2xl md:text-4xl font-bold mb-12">Know Me More</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                I'm Aminur Rahman, a MERN Stack Developer
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                I'm a passionate full-stack developer specializing in the MERN
                stack, currently on a mission to master full-stack development
                and AI automation. I build modern, scalable web applications
                that blend functionality with beautiful user experiences. My
                expertise spans React, Next.js, Node.js, MongoDB, Express.js,
                Redux, Tailwind CSS, Framer Motion, and more. From interactive
                UIs to secure payment systems with Stripe, I love turning
                complex challenges into elegant solutions. I'm constantly
                exploring emerging technologies, especially in AI automation, to
                create smarter and more efficient applications.
              </p>

              <div className="space-y-2 text-sm">
                <p>
                  <span className="font-bold">Email:</span>{" "}
                  amin.rahman.dev@gmail.com
                </p>
                <p>
                  <span className="font-bold">Date of Birth:</span> 24 December,
                  2000
                </p>
                <p>
                  <span className="font-bold">From:</span> Rajshahi, Bangladesh
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative border-4 border-foreground rounded-lg p-12">
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <span className="text-8xl font-bold">1+</span>
                  <p className="text-xl mt-4">
                    Years in Javascript development and DSA
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

