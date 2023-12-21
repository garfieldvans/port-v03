import React, { useState } from 'react';
import css from "./Portfolio.module.scss";
import { motion } from "framer-motion";
import { showcase } from "../../utils/data";
import { fadeIn, staggerChildren } from "../../utils/motion";
import { createBrowserHistory } from 'history';
import Detail from './detail/Detail';




// const history = createBrowserHistory();

const Portfolio = () => {
 
  const [selectedItem, setSelectedItem] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };
  return (
    <motion.section 
    variants={staggerChildren}
    initial="hidden"
    whileInView='show'
    viewport={{once: false, amount: 0.15}}
    className={`paddings ${css.wrapper}`}>
      <a className="anchor" id="portfolio"></a>
      <div className={`innerWidth flexCenter ${css.container}`}>
        <div className={`flexCenter ${css.heading}`}>
          <span className="primaryText">My latest project</span>
          <span className="secondaryText"><a href="https://github.com/garfieldvans">Explore more</a></span>
        </div>
        <div className={`flexCenter ${css.showCase}`}>
          {showcase.slice(0, 4).map((item, i) => {
            return (
              <div key={i} onClick={() => handleItemClick(item)}>
                <motion.img
                  variants={fadeIn("up", "tween", 0.5, 0.5)}
                  src={item.img}
                  alt={item.title}
                  className={css.imgs}
                  
                />
                {openModal && selectedItem && (
        <Detail
          item={selectedItem}
          open={openModal}
          onClose={closeModal}
        />
      )}
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
