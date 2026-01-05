"use client"

import { ThemeProvider } from "@/src/components/theme-provider"
import { TopNavigation } from "@/src/components/top-navigation"
import { Hero } from "@/src/components/hero"
import { About } from "@/src/components/about"
import { Services } from "@/src/components/services"
import { Skills } from "@/src/components/skills"
import { Facts } from "@/src/components/facts"
import { HowIWork } from "@/src/components/how-i-work"
import { Projects } from "@/src/components/projects"
import { Contact } from "@/src/components/contact"
import { motion } from "framer-motion"

export default function Page() {
  return (
    <ThemeProvider>
      <TopNavigation />
      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Facts />
        <HowIWork />
        <Projects />
        <Contact />
      </motion.main>
    </ThemeProvider>
  )
}
