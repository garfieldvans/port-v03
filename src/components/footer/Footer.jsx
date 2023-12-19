import React from 'react'
import css from './Footer.module.scss'

const Footer = () => {
  return (
    <section className={css.wrapper}>
        <div className={css.container}>
        <footer> <small>&copy; Copyright 2018, Bastian Haloho. All Rights Reserved</small> </footer>
        </div>
    </section>
  )
}

export default Footer
