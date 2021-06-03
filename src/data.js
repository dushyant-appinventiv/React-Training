import DevImage from "./images/developerIcon.png";
import Bit from "./images/bit.png";
import Bootstrap from "./images/bootstrap.png";
import GuideIst from "./images/guideIst.png";
import ReactApp from "./images/reactApp.png";
import ReactProto from "./images/reactProto.png";
import ReactSight from "./images/reactSight.png";
import RenderSet from "./images/renderSetting.png";
import Story from "./images/storyBook.png";

export const contentData = [
  {
    id: 1,
    imgSrc: DevImage,
    alt: "devImage",
    theme: "light",
    heading: "1) React Developer Tools",
    content:
      "Official Chrome extension for React from Facebook that lets you examine the list of components and subcomponents on the webpage",
  },
  {
    id: 2,
    imgSrc: ReactApp,
    alt: "reactApp",
    theme: "dark",
    heading: "2) Create React App",
    content: "Tool used in the process of setting up a React IDE",
  },
  {
    id: 3,
    imgSrc: Story,
    alt: "story",
    theme: "light",
    heading: "3) Storybook",
    content: "Online app that lets you create UI components.",
  },
  {
    id: 4,
    imgSrc: GuideIst,
    alt: "GuideIst",
    theme: "dark",
    heading: "4) React Styleguidist",
    content: "It offers an interactive way of creating and sharing UI",
  },
  {
    id: 5,
    theme: "light",
    imgSrc: Bit,
    alt: "bit",
    heading: "5) Bit",
    content:
      "CLI tool and online paltform that enables you to publish React components.",
  },
  {
    id: 6,
    theme: "dark",
    heading: "6) Bootstrap",
    imgSrc: Bootstrap,
    alt: "bootstrap",
    content:
      "Powerful toolkit that comprises HTML, CSS and JavaScript tools to help you create webpages and applications",
  },
  {
    id: 7,
    theme: "light",
    imgSrc: ReactSight,
    alt: "reactSight",
    heading: "7) React Sight",
    content:
      "Chrome extension for a virtual illustration of all components of your app in a live tree structure",
  },
  {
    id: 8,
    theme: "dark",
    imgSrc: RenderSet,
    alt: "renderSet",
    heading: "8) Why did you render",
    content: "It alerts you in the console when an avoidable render occurs",
  },
  {
    id: 9,
    theme: "light",
    imgSrc: ReactProto,
    alt: "reactProto",
    heading: "9) React Proto",
    content:
      "Lets you drag and drop the components your way to create a UI instead of coding.",
  },
];
