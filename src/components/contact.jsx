"use client";

import { motion } from "framer-motion";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiFacebook,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";

export function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center px-4 py-20 relative overflow-hidden"
    >
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <span className="text-[15rem] font-bold leading-none">CONTACT</span>
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm mb-2">Let's Get In Touch</p>
          <h2 className="text-6xl md:text-7xl font-bold mb-12">Contact Me</h2>

          {/* Contact Info */}
          <div className="flex flex-wrap gap-8 mb-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center">
                <FiPhone />
              </div>
              <span className="text-lg">01616660613</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center">
                <FiMail />
              </div>
              <span className="text-lg">amin.rahman.dev@gmail.com</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center">
                <FiMapPin />
              </div>
              <div>
                <span className="text-lg block">Rajshahi, Bangladesh</span>
              </div>
            </motion.div>

            <div className="flex gap-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center cursor-pointer"
              >
                <FiFacebook />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center cursor-pointer"
              >
                <FiLinkedin />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center cursor-pointer"
              >
                <FiTwitter />
              </motion.div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-3xl font-bold mb-8">Leave a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 font-medium">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-transparent border-b-2 border-foreground pb-2 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    placeholder="Your e-mail"
                    className="w-full bg-transparent border-b-2 border-foreground pb-2 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 font-medium">Message</label>
                <textarea
                  placeholder="Your message"
                  rows="4"
                  className="w-full bg-transparent border-b-2 border-foreground pb-2 focus:outline-none resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="relative"
              >
                <div className="w-32 h-32 rounded-full border-4 border-foreground flex items-center justify-center text-xl font-bold">
                  Submit
                </div>
                {[1, 2].map((i) => (
                  <div
                    key={i}
                    className="absolute inset-0 rounded-full border-2 border-foreground"
                    style={{
                      width: "100%",
                      height: "100%",
                      opacity: 0.3 + i * 0.1,
                    }}
                  />
                ))}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

