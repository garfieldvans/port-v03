import React from "react";
import css from "./Portfolio.module.scss";
import { motion } from "framer-motion";
import { showcase } from "../../utils/data";
import { fadeIn, staggerChildren } from "../../utils/motion";
import { useMediaQuery } from "react-responsive";



const Portfolio = () => {
  return (
    <motion.section 
    variants={staggerChildren}
    initial="hidden"
    whileInView='show'
    viewport={{once: false, amount: 0.15}}
    className={`paddings ${css.wrapper}`}>
      <div className={`innerWidth flexCenter ${css.container}`}>
        <div className={`flexCenter ${css.heading}`}>
          <span className="primaryText">My latest project</span>
          <span className="secondaryText">Explore more</span>
        </div>
        <div className={`flexCenter ${css.showCase}`}>
          {showcase.slice(0, 4).map((item, i) => {
            return (
              <div key={i}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                <motion.img
                  variants={fadeIn("up", "tween", 0.5, 0.5)}
                  src={item.img}
                  alt={item.title}
                  className={css.imgs}
                  
                /></a>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
