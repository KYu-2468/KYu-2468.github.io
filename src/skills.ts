import react from "./assets/icon/react.png";
import redux from "./assets/icon/redux.png";
import tailwind from "./assets/icon/tailwind.png";
import html from "./assets/icon/html.png";
import css from "./assets/icon/css.png";
import materialUI from "./assets/icon/material-ui.png";
import javascript from "./assets/icon/javascript.png";
import typescript from "./assets/icon/typescript.png";
import java from "./assets/icon/java.png";
import python from "./assets/icon/python.png";
import node from "./assets/icon/node.png";
import express from "./assets/icon/express.png";
import postgresql from "./assets/icon/postgresql.png";
import restfulApi from "./assets/icon/restful-api.png";
import graphQL from "./assets/icon/graphql.png";

import git from "./assets/icon/git.png";
import github from "./assets/icon/github.png";
import firebase from "./assets/icon/firebase.png";
import algo from "./assets/icon/lc.png";
import vsCode from "./assets/icon/vsCode.png";
import postman from "./assets/icon/postman.png";

export interface Skill {
  name: string;
  experience: string;
  icon: any;
}

const EXPERT = "Expert";
const PROFICIENT = "Proficient";
const COMPETENT = "Competent";
const ADVANCED_BEGINNER = "Advanced Beginner";
const BEGINNER = "Beginner";

export const language: Skill[] = [
  { name: "JavaScript", experience: PROFICIENT, icon: javascript },
  { name: "TypeScript", experience: COMPETENT, icon: typescript },
  { name: "Java", experience: ADVANCED_BEGINNER, icon: java },
  { name: "Python", experience: BEGINNER, icon: python },
];

export const frontEnd: Skill[] = [
  { name: "HTML5", experience: PROFICIENT, icon: html },
  { name: "CSS3", experience: COMPETENT, icon: css },
  { name: "React", experience: PROFICIENT, icon: react },
  { name: "Redux", experience: PROFICIENT, icon: redux },
  { name: "Tailwind CSS", experience: COMPETENT, icon: tailwind },
  { name: "Material UI", experience: ADVANCED_BEGINNER, icon: materialUI },
];

export const backEnd: Skill[] = [
  { name: "Node", experience: PROFICIENT, icon: node },
  { name: "Express", experience: PROFICIENT, icon: express },
  { name: "PostgreSQL", experience: COMPETENT, icon: postgresql },
  { name: "Firebase", experience: COMPETENT, icon: firebase },
  { name: "REST API", experience: COMPETENT, icon: restfulApi },
  { name: "GraphQL", experience: COMPETENT, icon: graphQL },
];

export const additional: Skill[] = [
  { name: "Algorithm & Data Structure", experience: EXPERT, icon: algo },
  { name: "Git", experience: COMPETENT, icon: git },
  { name: "GitHub", experience: COMPETENT, icon: github },
  { name: "VS Code", experience: PROFICIENT, icon: vsCode },
  { name: "Postman", experience: COMPETENT, icon: postman },
];
