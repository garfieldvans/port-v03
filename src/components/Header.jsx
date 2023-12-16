import React, { useEffect, useRef, useState } from "react";
import css from "./Header.module.scss";
import {motion} from 'framer-motion';
import { headerVariants, getMenuStyles } from "../utils/motion";
import {BiMenuAltRight} from 'react-icons/bi'
import useOutsideAlerter from "../Hooks/useOutsideAlert";
import useHeaderShadow from "../Hooks/useHeaderShadow";

const Header = () => {
  const menuRef = useRef(null);
    const [menuOpened, setMenuOpened] = useState(false)
    const headerShadow = useHeaderShadow()

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
    style={{boxShadow: headerShadow}}
    >
        <div className={`flexCenter innerWidth ${css.container}`}>
            <div className={css.name}>
                Bastian
            </div>

            <ul 
            
            style={getMenuStyles(menuOpened)}
            className={`flexCenter ${css.menu}`}>
                <li><a href="#">About</a></li>
                <li><a href="#">Skill</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contact</a></li>
            </ul>

            <div 
            className={css.menuIcon}
            onClick={() => {
              // Log the click event or other relevant information
              // console.log(menuOpened);
              setMenuOpened((prev) => !prev);
            }}
            >
                <BiMenuAltRight  size={40}/>
            </div>
        </div>
    </motion.div>
  );
};

export default Header;
