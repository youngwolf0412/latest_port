import React from "react";
import { CgWorkAlt } from "react-icons/cg";

import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  
] as const;

export const experiencesData = [
  {
    title: "Graduated in Btech Information Technology ",
    location: "Ghaziabad",
    description:
      "I graduated after 4 years of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Front-End Developer",
    location: "Noida",
    description:
      "I worked as a front-end developer for 2 years in Infosys. Where i upskilled myself as a ReactJS developer.",
    icon: React.createElement(CgWorkAlt),
    date: "2021-Present",
  },
] as const;

export const projectsData = [
  {
    title: "Australian Open 2024 Project",
    description:
      "I worked as a frontend developer on this project for 2 years where  we created a website for coaches and players to analyse their gameplay and update.",
    tags: ["React", "MongoDB", "Tailwind"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Food Delivery App",
    description:
      "Developed a food delivery app using the MERN (MongoDB, Express, React, Node.js ) stack. The app allows users to order food items",
    tags: ["React", "TypeScript", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Framer Motion",
] as const;
