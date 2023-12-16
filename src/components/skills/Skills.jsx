import React from "react";
import { WhatDoIHelp, projectExperience, skills } from "../../utils/data";
import css from "./Skills.module.scss";

const Skills = () => {
  return (
    <section className={css.wrapper}>
      <div
        className={`paddings innerWidth ${css.container}`}
      >
        <div className={css.title}>
            <span className={`primaryText ${css.titleText}`}> My Expertise</span>
            <div className={css.exp}>{
                skills.map((item, i) => {
                    return(
                        <item.icon key={i} className={css.icon}/>
                    )
                })
            }</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
