import React from 'react'
import Header from './components/Header'
import css from './styles/app.module.scss'
import Hero from './components/hero/hero'
import Skills from './components/skills/Skills'
import Portfolio from './components/portfolio/Portfolio'

const App = () => {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header/>
      <Hero/>
      <Portfolio/>
      <Skills/>

    </div>
  )
}

export default App
