import React from "react";
import { CgWorkAlt } from "react-icons/cg";

import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import hotelbooking from "@/public/hotelbooking.png"

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
    title: "System Engineer",
    location: "Noida",
    description:
      "I worked as a front-end developer for 2 years in Infosys. Where i upskilled myself as a ReactJS developer.",
    icon: React.createElement(CgWorkAlt),
    date: "2021-23",
  },
  {
    title: "Senior System Engineer",
    location: "Noida",
    description:
      "As a senior system engineer my role was to guide my junior about the Technology we use like Typescript,ReactJS and give konwledge transfer. Also, take responsibilty of the whole project which is built by us, little changes were still made and taken care of every design impacts and user interface comforts.",
    icon: React.createElement(CgWorkAlt),
    date: "2023-Present",
  },
] as const;

export const projectsData = [
  {
    title: "Australian Open 2024 Project",
    description:
      "I worked as a frontend developer on this project for 2 years where  we created a website for coaches and players to analyse their gameplay and update.",
    tags: ["ReactJS", "Tailwind","JavaScript","HTML & CSS","MongoDB","Github"],
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
    title: "Hotel Management System",
    description:
      "A complete hotel booking system, where user can signup, login and choose hotels from multiple available options. And make a booking for any advance date by picking a from date to to date and make the payments.",
    tags: ["React", "Next.js", "JavaScript", "Tailwind"],
    imageUrl: hotelbooking,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "AWS",
  "AWS Lambda",
  "AWS Amplify",
  "AWS ECS/EKS services",
  "API Gateway",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
] as const;
