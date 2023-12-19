import React from "react";
import { WhatDoIHelp, projectExperience, skills } from "../../utils/data";
import css from "./Skills.module.scss";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren, staggerContainer, textVariant } from "../../utils/motion";

const Skills = () => {
  return (
    <motion.section
      className={`paddings ${css.wrapper}`}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.15 }}
    >
      <div className={`innerWidth ${css.container}`}>
        <motion.div
          className={css.title}
          
        >
          <motion.span 
          variants={fadeIn("up", "tween", 0.6, 1)}
          className={`primaryText ${css.titleText}`}> My Expertise</motion.span>
          <motion.div 
          variants={fadeIn("left", "tween", 0.6, 1)}
          className={css.exp}>
            {skills.map((item, i) => {
              return (
                <motion.div
                variants={fadeIn("right", "tween", (i+1)*0.2, 1)} key={i}>

                  <item.icon key={i} className={css.icon} />
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
