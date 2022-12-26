import React from 'react'
import Navbar from './components/navbar/navbar'
import Header from './container/header/header'
import About from './container/about/about'
import { SocialMedia } from './components'
function app() {
  return (
    <div>
        <Navbar />
        <Header />
        <About />
        {/* <SocialMedia /> */}
    </div>
  )
}

export default app