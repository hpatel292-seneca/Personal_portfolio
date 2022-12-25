import React from 'react'
import Navbar from './components/navbar/navbar'
import Header from './container/header/header'
import About from './container/about/about'
function app() {
  return (
    <div>
        <Navbar />
        <Header />
        <About />
    </div>
  )
}

export default app