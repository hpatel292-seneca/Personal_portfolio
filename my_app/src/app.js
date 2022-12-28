import React from 'react'
import Navbar from './components/navbar/navbar'
import Header from './container/header/header'
import About from './container/about/about'
import Work from "./container/work/Work"
import Skills from './container/skill/Skills'
import Contact from './container/contact/Contact'
function app() {
  return (
    <div>
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Contact />
    </div>
  )
}

export default app