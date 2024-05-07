import React from "react";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";

const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <a className="anchor" id="hero"></a>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElement}>
          <motion.span 
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="primaryText">
            Hey There, <br /> I am Bastian
          </motion.span>
          <motion.span 
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="secondaryText" style={{textAlign: 'center'}}>
            I love to design a <br />
            beautiful simple things
          </motion.span>
        </div>

        <motion.div 
        variants={fadeIn("up", "tween", 0.2, 1)}
        className={css.person}>
          <motion.img src="./profile.png" alt="" variants={fadeIn("left", "tween", 0.2, 1)}/>
        </motion.div>

        <a href="mailto:bastianhalo19@gmail.com" className={css.email}>
          bastianhalo19@gmail.com
        </a>

        <motion.div 
        variants={fadeIn("up", "tween", 0.2, 1)}
        className={css.lowerElement}>
          <div className={css.project}>
            <div className="primaryText">10+</div>
            <div className="secondaryText">
              <div>Project</div>
            </div>
          </div>
          <div className={css.pengalaman}>
            <div className="primaryText">1</div>
            <span className="secondaryText">Professional</span>
            <span className="secondaryText">Experiences</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
