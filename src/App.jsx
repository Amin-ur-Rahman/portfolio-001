"use client"

import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "./components/theme-provider"
import { TopNavigation } from "./components/top-navigation"
import { Hero } from "./components/hero"
import { About } from "./components/about"
import { Services } from "./components/services"
import { Skills } from "./components/skills"
import { Facts } from "./components/facts"
import { HowIWork } from "./components/how-i-work"
import { Projects } from "./components/projects"
import { Contact } from "./components/contact"
import { motion } from "framer-motion"

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  )
}

export default App
