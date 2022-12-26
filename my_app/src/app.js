import React from 'react'
import Navbar from './components/navbar/navbar'
import Header from './container/header/header'
import About from './container/about/about'
import Work from "./container/work/Work"
function app() {
  return (
    <div>
        <Navbar />
        <Header />
        <About />
        <Work />
    </div>
  )
}

export default app