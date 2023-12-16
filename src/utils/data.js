import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
import { FaGithub, FaInstagramSquare, FaReact, FaHtml5, FaNodeJs, FaPhp } from "react-icons/fa";
import { IoIosMail, IoLogoWhatsapp, IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress } from "react-icons/si";

export const projectExperience = [
  {
    name: "Website Design",
    projects: 3,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Mobile App Design",
    projects: 2,
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "Personal Project",
    projects: 5,
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "I am open to opportunities as a frontend developer and also all opportunities related to my skills.",
  "I'll help you turn your design into a responsive website. Apart from that, it also helps your business.",
];

export const workExp = [
  {
    place: "CodeMasters Id Bootcamp",
    tenure: "Sep 2023 - Dec 2023",
    role: "Fullstack Developer",
    detail:
      "Studying full stack developer material using the MERN stack and mobile development material using React Native."
    },
  {
    place: "PT Medika Digital Nusantara",
    tenure: "Jul 2023 - Sep 2023",
    role: "Customer Services Freelance",
    detail:
      "Handle technical complaints from clients and provide solutions that can handle problems that occur.",
  },
  {
    place: "Raja Tas Batam",
    tenure: "Apr 2020 - Aug 2021",
    role: "Reseller",
    detail:
      "Selling goods on social media sites or platforms and online shops.",
  },
];

export const contact = [
  {
    name: "GitHub",
    icon: FaGithub,
    link: "#",
  },
  {
    name: "Email",
    icon: IoIosMail,
    link: "#",
  },
  {
    name: "Whatsapp",
    icon: IoLogoWhatsapp,
    link: "#",
  },
  {
    name: "IG",
    icon: FaInstagramSquare,
    link: "#",
  },
];

export const skills = [
    {
      name: "html",
      icon: FaHtml5
    },
    {
      name: "javascript",
      icon: IoLogoJavascript
    },
    {
      name: "css",
      icon: IoLogoCss3
    },
    {
      name: "react",
      icon: FaReact
    },
    {
        name: "node",
        icon: FaNodeJs
      },
      {
        name: "php",
        icon: FaPhp
      },
      {
        name: "express",
        icon: SiExpress
      },
  ];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
