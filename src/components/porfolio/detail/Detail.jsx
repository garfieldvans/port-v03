import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import css from "./Detail.module.scss";
import { RiGitRepositoryLine } from "react-icons/ri";
import { SiSpeedtest } from "react-icons/si";

const Modal = ({ open, onClose, item }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className={css.wrapper}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={css.container}
      >
        <div className={css.modalRight}>
          <div className={css.top}>
            <p className={css.closeBtn} onClick={onClose}>
              <IoCloseSharp size={30} />
            </p>
            <h3>{item.title}</h3>
          </div>
          <div className={css.content}>
            <img src={item.img} className={css.img} />
            <div className={css.line}/>
            <p className="secondaryText">
              {item.detail}
            </p>
          </div>
          <div className={css.btnContainer}>
            <button className={css.btnPrimary}>
                <a href={item.repo}>
                <RiGitRepositoryLine color="white"/>
              <span className="bold"> Repo</span>

                </a>
            </button>
            <button className={css.btnOutline}>
                <a href={item.link}>
                <SiSpeedtest color="white"/>
              <span className="bold">Demo</span>
                </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
