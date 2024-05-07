import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
import {
  FaGithub,
  FaInstagramSquare,
  FaReact,
  FaHtml5,
  FaNodeJs,
  FaPhp,
} from "react-icons/fa";
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
    place: "PT ASI Pudjiastuti Aviation (Susi Air)",
    tenure: "Oct 2023 - Apr 2024",
    role: "Fullstack Developer",
    detail:
      "- Do bug fixing on company web application projects.\n- Make sure and maintanance to company web application projects to be save.\n- then code a new or renew features on company web application projects",
  },
  {
    place: "CodeMasters Id Bootcamp",
    tenure: "Sep 2023 - Dec 2023",
    role: "Fullstack Developer",
    detail:
      "Studying full stack developer material using the MERN stack and mobile development material using React Native.",
  },
  {
    place: "PT Medika Digital Nusantara",
    tenure: "Jul 2023 - Sep 2023",
    role: "Customer Services Freelance",
    detail:
      "Handle technical complaints from clients and provide solutions that can handle problems that occur.",
  },
  
];

export const contact = [
  {
    name: "GitHub",
    icon: FaGithub,
    link: "https://github.com/garfieldvans",
  },
  {
    name: "Email",
    icon: IoIosMail,
    link: "mailto: bastianhaloho12@gmail.com",
  },
  {
    name: "Whatsapp",
    icon: IoLogoWhatsapp,
    link: "https://wa.me/+6288228655310",
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
    icon: FaHtml5,
  },
  {
    name: "javascript",
    icon: IoLogoJavascript,
  },
  {
    name: "css",
    icon: IoLogoCss3,
  },
  {
    name: "react",
    icon: FaReact,
  },
  {
    name: "node",
    icon: FaNodeJs,
  },
  {
    name: "php",
    icon: FaPhp,
  },
  {
    name: "express",
    icon: SiExpress,
  },
];

export const showcase = [
  {
    id: 1,
    repo: "https://github.com/garfieldvans/port-v03",
    title: "Portofolio v3",
    img: "portv3.jpg",
    link: "https://bastian-here-v3.vercel.app/",
    detail:
      "This website is the main portfolio website that I use. On this website I use the React JS framework and styling using the SASS/SCSS module.",
  },
  {
    id: 2,
    repo: "https://github.com/garfieldvans/Admin-Dashboard",
    title: "CodeMasters Dashboard",
    img: "adminDashboard.jpg",
    link: "https://codemasters-admin-dashboard.vercel.app/signin",
    detail:
      "This website is a clone of the admin dashboard website from CodeMasters ID. Created using the React JS framework and styling components from Chakra UI. If you want to try the demo, use email: user1@example.com and password: password.",
      
  },
   {
    id: 3,
    repo: "https://susiair.com",
    title: "Susiair Official Website",
    img: "susiair.png",
    link: "https://susiair.com",
    detail: "This project is a Susi Air Official Website project used by the company internally. The following project is a project that Susi Air dev and I are working on. The repository can only be accessed by dev admins."
  },
  {
    id: 4,
    repo: "https://dashboard.susiair.com",
    title: "Susi Air Super Apps",
    img: "susidash.png",
    link: "https://dashboard.susiair.com",
    detail:"This project is a Susi Air admin dashboard super app project used by the company internally. The following project is a project that Susi Air dev and I are working on. The repository can only be accessed by dev admins."
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
