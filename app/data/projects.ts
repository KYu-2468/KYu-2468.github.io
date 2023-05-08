import { SingleProject } from "../components/Project";

const rfTrainingSGS = "./video/rfTrainingSGS.mp4";
const netflik = "./video/netflik.mp4";
const chartMyJog = "./video/chartMyJog.mp4";

// import emojiStore from "../assets/img/emoji-store.png";
// import dsa from "../assets/img/dsa.png";
// import portfolio from "../assets/img/portfolio.gif";

const projects: SingleProject[] = [
  {
    name: "Chart My Jog",
    description:
      "Chart My Jog is a fitness application built with React, Tailwind, Material UI, Firebase, Firestore, Mapbox API, Leaflet, React-leaflet, and Geolocation API. Chart My Jog helps users track and record their jogs in real-time and render their route on a digital map. Users can view and share their accomplishments and track their progress throughout their lifetime.",
    github: "https://github.com/KYu-2468/ChartMyJog",
    website: "https://chart-my-jog.web.app/",
    video: chartMyJog,
  },
  {
    name: "RF Training",
    description:
      "RF Traning Website is an independent project built with React, Tailwind, Windmill, and Firebase. It enabled new SGS hires (Interns, Technicians, and Engineers) to learn 4G/5G RF system operations, improved the efficiency of the onboarding process by 55%, and reduced the cost of training by 65%. Firebase Authentication and Storage Security rules are implemented to protect sensitive materials from unauthorized personnel.",
    github: "https://github.com/KYu-2468/RF-Training",
    website: "https://rf-training-sgs.web.app/",
    video: rfTrainingSGS,
  },
  {
    name: "NetfliK",
    description:
      "Netflix is one of the most popular streaming services currently available in the market. Netflik is built with React, Tailwind, TMDB API, React-Youtube, and AWS Amplify. All current videos are trailers of the corresponding movies.",
    github: "https://github.com/KYu-2468/netflixk",
    website: "https://prod.d3w3n4pah8m9bk.amplifyapp.com",
    video: netflik,
  },
  // {
  //   name: "Portfolio",
  //   description:
  //     "This portfolio website was built from scratch by Kevin Yu with TypeScript, React, Tailwind, and GitHub Pages.",
  //   github: "https://github.com/KYu-2468/KYu-2468.github.io",
  //   website: "https://kyu-2468.github.io/",
  //   image: portfolio,
  // },
  // {
  //   name: "Emoji Store",
  //   description:
  //     "An awesome E-commerce website built with React, Tailwind, Node.js, Express.js, PostgreSQL, React-three-fiber, Spline, and Stripe API! Users can purchase and sell emojis via our website. Payment methods are implemented using Stripe API.",
  //   github: "https://github.com/KYu-2468/EmojiStore",
  //   website: "#projects",
  //   image: emojiStore,
  // },
  // {
  //   name: "DSA",
  //   description:
  //     "An open source project that aims to help new software engineers learn how to contribute to open source projects through implementing efficient data structures and algorithms.",
  //   github: "https://github.com/MakeContributions/DSA",
  //   website: "#projects",
  //   image: dsa,
  // },
];

export default projects;
