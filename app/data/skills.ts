const react = "./icon/react.png";
const redux = "./icon/redux.png";
const tailwind = "./icon/tailwind.png";
const html = "./icon/html.png";
const css = "./icon/css.png";
const materialUI = "./icon/material-ui.png";
const javascript = "./icon/javascript.png";
const typescript = "./icon/typescript.png";
const java = "./icon/java.png";
const node = "./icon/node.png";
const express = "./icon/express.png";
const postgresql = "./icon/postgresql.png";
const restfulApi = "./icon/restful-api.png";
const graphQL = "./icon/graphql.png";

const git = "./icon/git.png";
const github = "./icon/github.png";
const firebase = "./icon/firebase.png";
const vsCode = "./icon/vs-code.png";
const postman = "./icon/postman.png";
const docker = "./icon/docker.png";

export interface Skill {
  name: string;
  experience: string;
  icon: any;
}

// const EXPERT = "Expert";
const PROFICIENT = "Proficient";
const COMPETENT = "Competent";
const ADVANCED_BEGINNER = "Advanced Beginner";
// const BEGINNER = "Beginner";

export const language: Skill[] = [
  { name: "JavaScript", experience: PROFICIENT, icon: javascript },
  { name: "TypeScript", experience: COMPETENT, icon: typescript },
  // { name: "Python", experience: COMPETENT, icon: python },
  { name: "Java", experience: COMPETENT, icon: java },
];

export const frontEnd: Skill[] = [
  { name: "React", experience: PROFICIENT, icon: react },
  { name: "Redux", experience: PROFICIENT, icon: redux },
  { name: "HTML5", experience: PROFICIENT, icon: html },
  { name: "CSS3", experience: COMPETENT, icon: css },
  { name: "Tailwind CSS", experience: COMPETENT, icon: tailwind },
  { name: "Material UI", experience: ADVANCED_BEGINNER, icon: materialUI },
];

export const backEnd: Skill[] = [
  { name: "Node", experience: PROFICIENT, icon: node },
  { name: "Express", experience: PROFICIENT, icon: express },
  { name: "PostgreSQL", experience: COMPETENT, icon: postgresql },
  { name: "Firebase", experience: COMPETENT, icon: firebase },
  { name: "REST API", experience: COMPETENT, icon: restfulApi },
  { name: "GraphQL", experience: ADVANCED_BEGINNER, icon: graphQL },
];

export const additional: Skill[] = [
  // { name: "Algorithm & Data Structure", experience: EXPERT, icon: algo },
  { name: "VS Code", experience: PROFICIENT, icon: vsCode },
  { name: "Git", experience: COMPETENT, icon: git },
  { name: "GitHub", experience: COMPETENT, icon: github },
  { name: "Postman", experience: COMPETENT, icon: postman },
  { name: "Docker", experience: COMPETENT, icon: docker },
];
