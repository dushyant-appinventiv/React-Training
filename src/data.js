import DevImage from "./images/developerIcon.png";
import Bootstrap from "./images/bootstrap.png";
import RenderSet from "./images/renderSetting.png";

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
    imgSrc: RenderSet,
    alt: "reactApp",
    theme: "dark",
    heading: "2) Create React App",
    content: "Tool used in the process of setting up a React IDE",
  },
  {
    id: 3,
    imgSrc: DevImage,
    alt: "story",
    theme: "light",
    heading: "3) Storybook",
    content: "Online app that lets you create UI components.",
  },
  {
    id: 4,
    imgSrc: RenderSet,
    alt: "GuideIst",
    theme: "dark",
    heading: "4) React Styleguidist",
    content: "It offers an interactive way of creating and sharing UI",
  },
  {
    id: 5,
    theme: "light",
    imgSrc: DevImage,
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
    imgSrc: RenderSet,
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
    imgSrc: DevImage,
    alt: "reactProto",
    heading: "9) React Proto",
    content:
      "Lets you drag and drop the components your way to create a UI instead of coding.",
  },
];

// ASSIGNMENT 4 DATA
export const supportQuestions = [
  {
    id: 1,
    title: "Buy currency",
    questions: [
      "What currencies do we accept?",
      "What is the minimum order amount?",
      "What is a Cash Advance Fee?",
      "Ethereum orders and smart contracts",
      "Ethereum orders and smart contracts",
    ],
  },
  {
    id: 2,
    title: "Verification",
    questions: [
      "ID verification documents submitted",
      "How should you take the perfect selfie",
      "What ID can you use to sign up …",
      "Your application to join Xcoins was …",
      "How to make sure your verification …",
    ],
  },
  {
    id: 3,
    title: "Orders",
    questions: [
      "Resetting your password",
      "What does order completed mean?",
      "Why has my order failed?",
      "What does order cancelled mean?",
      "Why does it take time to receive my…",
    ],
  },
  {
    id: 4,
    title: "Wallet",
    questions: [
      "What is my wallet address?",
      "What is a destination tag and why…",
      "What are cold wallets?",
      "What are hot wallets?",
      "What is a wallet?",
    ],
  },
  {
    id: 5,
    title: "Payment methods",
    questions: [
      "Accepted credit/debit cards",
      "Overview of bank fees - Cash advance…",
    ],
  },
  {
    id: 6,
    title: "Other",
    questions: [
      "What are our business hours?",
      "How can I contact Xcoins?",
      "Why have I not received my email …",
      "Why can’t I access my brand new …",
    ],
  },
  {
    id: 7,
    title: "Security",
    questions: [
      "How can I protect myself from scams?",
      "Forgotten your password?",
      "Create a strong password",
    ],
  },
  {
    id: 8,
    title: "Referral programme",
    questions: ["How does the Xcoins affiliate program…"],
  },
];

export const apiData = {
  Info: "This is Official data of a customer with dealer",
  dealer: {
    id: "dealer_1",
    name: "dealer_abc",
    address: "PQRS DEF LMN",
    phoneNo: "9955778844",
  },
  customer: {
    id: "customer_1",
    name: "customer_abc",
    address: "XYZ ABC MNOP",
    phoneNo: "8498542489",
  },
  bikes: [
    {
      id: 1,
      price: 4000,
      model: "Hero",
      dod: "23-02-2021",
      name: "Hero Honda RTR",
      desc: "Good condition. First and only owner. 7 more years of COE. No loan. Call me to deal immediately.",
    },
    {
      id: 2,
      price: 2200,
      model: "Honda",
      dod: "12-09-2017",
      name: "Ninja",
      desc: "Just finished full servicing. New handlebar grips. New Sparkplug. Slim IU. Slight issue with the speedometer (needle broke but you can still tell the speed). 3 years of COE left, non-renewable. Just renewed road tax til 11 March 2015. Great short-term ride.",
    },
    {
      id: 3,
      price: 3800,
      model: "Suzuki",
      dod: "01-03-2022",
      name: "Suzuki Hayabusa",
      desc: "Greeting! I have got an excellent weekend Honda phantom TA200 cruiser for sale. Great engine condition, fast pickup and smooth acceleration. Pristine condition cruiser with beautiful paintwork. Recently I had just change new set of high profile tyres, new slim IU unit (with 5yrs warranty), DID O-ring chain, new set of alloy sprockets, new battery and new set of brakes. Good working top box. COE is till Mar 2022. You can contact me directly at 81477848.",
    },
    {
      id: 4,
      price: 2400,
      model: "Kiosaki",
      dod: "01-05-2018",
      name: "Alturis 360",
      desc: "Good condition Honda NSR150SP - Fast, agile and responsive sport bike. New paintwork and all parts are in good working condition. All stock and original parts used. This is one of best two stroke bike in SG. COE till May 2018. Contact me at 90922199 if you are interested.",
    },
  ],
  cars: [
    {
      id: 1,
      name: "Figo",
      miles_per_Gallon: 18,
      cylinders: 8,
      weightInLbs: 3504,
      acceleration: 12,
      year: "1970-01-01",
      origin: "USA",
    },
    {
      id: 2,
      name: "Wagonr",
      miles_per_Gallon: 15,
      cylinders: 8,
      weightInLbs: 3693,
      acceleration: 11.5,
      year: "1970-01-01",
      origin: "USA",
    },
    {
      id: 3,
      name: "i20",
      miles_per_Gallon: 18,
      cylinders: 8,
      weightInLbs: 3436,
      acceleration: 11,
      year: "1970-01-01",
      origin: "USA",
    },
    {
      id: 4,
      name: "TUV 300",
      miles_per_Gallon: 16,
      cylinders: 8,
      weightInLbs: 3433,
      acceleration: 12,
      year: "1970-01-01",
      origin: "USA",
    },
    {
      id: 5,
      name: "XUV 500",
      miles_per_Gallon: 17,
      cylinders: 8,
      weightInLbs: 3449,
      acceleration: 10.5,
      year: "1970-01-01",
      origin: "USA",
    },
  ],
};
