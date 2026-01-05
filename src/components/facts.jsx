"use client";

import { motion } from "framer-motion";

export function Facts() {
  return (
    <section
      id="facts"
      className="min-h-screen flex items-center px-4   relative overflow-hidden"
    >
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        {/* <span className="text-[15rem] font-bold leading-none">FACTS</span> */}
      </div>
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-6xl md:text-7xl font-bold mb-12">
            Interesting Facts About Me
          </h2>

          <div className="flex justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border-4 border-foreground rounded-lg p-16 inline-block"
            >
              <motion.span
                className="text-xl font-bold block"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                I always find smart way of doing things
              </motion.span>
              {/* <p className="text-2xl mt-6">Years of experience</p> */}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

