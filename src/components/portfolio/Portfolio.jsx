import React from "react";
import { WhatDoIHelp, projectExperience } from "../../utils/data";
import css from "./Portfolio.module.scss";

const Portfolio = () => {
    function countTotalProjects() {
        // Use .map() to extract the 'projects' property from each object
        const projectCounts = projectExperience.map(project => project.projects);
        
        // Use .reduce() to sum up the project counts
        const totalProjects = projectCounts.reduce((total, count) => total + count, 0);
        
        console.log(totalProjects);
        return totalProjects;


      }
      
      const totalProjects = countTotalProjects();
  return (
    <section className={css.wrapper}>
      <div
        className={`paddings yPaddings flexCenter innerWidth ${css.container}`}
      >
        <div className={css.leftSide}>
          {projectExperience.map((exp, i) => {
            return (
              <div className={css.exp} key={i}>
                <div className="flexCenter" style={{ backgroundColor: exp.bg }}>
                  <exp.icon size={25} color="white" />
                </div>

                <div>
                  <span>{exp.name}</span>
                  <span className="secondaryText">{exp.projects} Projects</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className={css.rightSide}>
          <span className="primaryText">What do i help?</span>
          {WhatDoIHelp.map((paragraph, i) => {
            return <span className="secondaryText">{paragraph}</span>;
          })}
          <div className={`flexCenter ${css.stats}`}>
          <div className={`flexCenter ${css.stat}`}>

              <span className="primaryText">
                {totalProjects}+
              </span>
              <span className="secondaryText"> Project</span>

          </div>
        </div>
        </div>
        
      </div>
    </section>
  );
};

export default Portfolio;
