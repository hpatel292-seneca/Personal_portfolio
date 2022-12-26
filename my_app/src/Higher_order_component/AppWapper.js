import React from 'react'

import { SocialMedia, NavigationDot } from '../components'
import "../app.css"
import "./index.css"
export default function AppWarp(Component, id){
  return function HOC() {
  return <div className='app__container app__HOC'>
    <SocialMedia className="social"/>
    <Component className="component"/>
    <NavigationDot active={id} className="navigation"/>
  </div>
  }
}