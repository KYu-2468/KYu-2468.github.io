const react = "./icon/react.webp";
const redux = "./icon/redux.webp";
const tailwind = "./icon/tailwind.webp";
const html = "./icon/html.webp";
const css = "./icon/css.webp";
const materialUI = "./icon/material-ui.webp";
const javascript = "./icon/javascript.webp";
const typescript = "./icon/typescript.webp";
const java = "./icon/java.webp";
const node = "./icon/node.webp";
const express = "./icon/express.webp";
const expressWhite = "./icon/express-white.webp";
const postgresql = "./icon/postgresql.webp";
// const restfulApi = "./icon/restful-api.webp";
const graphQL = "./icon/graphql.webp";

const git = "./icon/git.webp";
const github = "./icon/github.webp";
const firebase = "./icon/firebase.webp";
const vsCode = "./icon/vs-code.webp";
const postman = "./icon/postman.webp";
const docker = "./icon/docker.webp";

export interface SkillProp {
  name: string;
  experience: string;
  icon: any;
}

// const EXPERT = "Expert";
const PROFICIENT = "Proficient";
const COMPETENT = "Competent";
const ADVANCED_BEGINNER = "Advanced Beginner";
// const BEGINNER = "Beginner";

export const language: SkillProp[] = [
  { name: "JavaScript", experience: PROFICIENT, icon: javascript },
  { name: "TypeScript", experience: COMPETENT, icon: typescript },
  // { name: "Python", experience: COMPETENT, icon: python },
  { name: "Java", experience: COMPETENT, icon: java },
];

export const frontEnd: SkillProp[] = [
  { name: "React", experience: PROFICIENT, icon: react },
  { name: "Redux", experience: PROFICIENT, icon: redux },
  { name: "HTML5", experience: PROFICIENT, icon: html },
  { name: "CSS3", experience: COMPETENT, icon: css },
  { name: "Tailwind CSS", experience: COMPETENT, icon: tailwind },
  { name: "Material UI", experience: ADVANCED_BEGINNER, icon: materialUI },
];

export const backEnd: SkillProp[] = [
  { name: "Node", experience: PROFICIENT, icon: node },
  // { name: "Express", experience: PROFICIENT, icon: express },
  // { name: "Express", experience: PROFICIENT, icon: expressWhite },
  { name: "PostgreSQL", experience: COMPETENT, icon: postgresql },
  { name: "Firebase", experience: COMPETENT, icon: firebase },
  // { name: "REST API", experience: COMPETENT, icon: restfulApi },
  { name: "GraphQL", experience: ADVANCED_BEGINNER, icon: graphQL },
];

export const additional: SkillProp[] = [
  // { name: "Algorithm & Data Structure", experience: EXPERT, icon: algo },
  { name: "VS Code", experience: PROFICIENT, icon: vsCode },
  { name: "Git", experience: COMPETENT, icon: git },
  { name: "GitHub", experience: COMPETENT, icon: github },
  { name: "Postman", experience: COMPETENT, icon: postman },
  { name: "Docker", experience: COMPETENT, icon: docker },
];
