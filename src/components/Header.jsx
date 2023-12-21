import React, { useEffect, useRef, useState } from "react";
import css from "./Header.module.scss";
import { motion } from "framer-motion";
import { headerVariants, getMenuStyles } from "../utils/motion";
import { BiMenuAltRight } from "react-icons/bi";
import useOutsideAlerter from "../Hooks/useOutsideAlert";
import useHeaderShadow from "../Hooks/useHeaderShadow";
import { contact } from "../utils/data";

const Header = () => {
  const menuRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();

  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });

  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      className={`bg-primary paddings ${css.wrapper}`}
      viewport={{ once: true, amount: 0.25 }}
      style={{ boxShadow: headerShadow }}
    >
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>Bastian</div>

        <ul
          // ref={menuRef}
          style={getMenuStyles(menuOpened)}
          className={`flexCenter ${css.menu}`}
        >
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skill">Experise</a>
          </li>
          <li>
            <a href="#work">Experience</a>
          </li>
          <li>
            <a href="#portfolio">Portofolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className={css.contactIcon}>
          {contact.map((contact, i) => {
            return (
              <div key={i}>
                <a href={contact.link}>
                <contact.icon className={css.iconz} size={27}/>
                </a>
              </div>
            );
          })}
        </div>

        <div
          className={css.menuIcon}
          onClick={() => {
            setMenuOpened((prev) => !prev);
          }}
        >
          <BiMenuAltRight size={40} className={css.icon} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
