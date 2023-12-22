import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Contact.module.scss";
import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
import { FaFileContract } from "react-icons/fa";
import { contact } from "../../utils/data";
import resume from "../../../public/sebastian_resume.pdf";

const Contact = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="contact"></a>

      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}
      >
        <div className={css.left}>
          <span className="primaryText">
            Let's make something <br />
            amazing together.
          </span>
          <span className="primaryText">
            Start by <a href="mailto: bastianhaloho12@gmail.com">saying hi</a>
          </span>
          <span className="primaryText">
            Or download my resume here.{" "}
            <a
              download="Sebastian-Resume"
              target="_blank"
              rel="noopener noreferrer"
              href={resume}
            >
              <FaFileContract  style={{marginRight: "5px",}}/>Resume
            </a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Other Information</span>
            <p>
              <FaLocationDot color="black" size="20px" /> Sleman, Yogyakarta
            </p>
          </div>
          <div className={css.menu}>
            {contact.map((contact, i) => {
              return (
                <div key={i}>
                  <a href={contact.link}>
                    <contact.icon className={css.icons} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
