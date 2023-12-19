import React, { Children } from "react";
import css from "./Works.module.scss";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren, textVariant2, zoomIn } from "../../utils/motion";
import { workExp } from "../../utils/data";

const Works = () => {
  return (
    <motion.section
      className={`paddings ${css.wrapper}`}
      variants={staggerChildren}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.15 }}
    >
      <div className={`flexCenter innerWidth ${css.container}`}>
        <span className="primaryText">Work Experience</span>

        <div className={`flexCenter ${css.workExp}`}>
          {workExp.map((item, i) => {
            return (
              <motion.div
                variants={textVariant2}
                className={`flexCenter ${css.exp}`}
                key={i}
              >
                <div className={css.post}>
                  <h4>{item.place}</h4>
                  <p>{item.tenure}</p>
                </div>
                <div className={css.role}>
                  <h4>{item.role}</h4>
                  <p>{item.detail}</p>
                </div>
              </motion.div>
            );
          })}
        
        <motion.div 
        variants={zoomIn(1,1)}
        className={css.proggressBar}>
          <motion.div
          variants={fadeIn("down", "tween", 1, 1.5)}
          className={css.line}></motion.div>
          <div>
            <div className={css.circle} style={{ background: "teal" }}></div>
          </div>
          <div>
            <div className={css.circle} style={{ background: "tomato" }}></div>
          </div>
          <div>
            <div className={css.circle} style={{ background: "aqua" }}></div>
          </div>
        </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Works;
