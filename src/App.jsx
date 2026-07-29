import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

import {
  profile,
  navLinks,
  about,
  skills,
  projects,
  contact,
  footer,
} from './data.js'

function App() {
  return (
    <>
      <Navbar profile={profile} links={navLinks} />
      <main>
        <Hero profile={profile} />
        <About about={about} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Contact contact={contact} />
      </main>
      <Footer footer={footer} />
    </>
  )
}

export default App
