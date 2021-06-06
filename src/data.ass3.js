import BlueTick from "./images3/blueTick.svg";
import BlueTime from "./images3/blueTimer.svg";
import BlueWaller from "./images3/blueWallet.svg";
import GreenTick from "./images3/greenTick.svg";
import GreenTimer from "./images3/greenTimer.svg";
import GreenWallet from "./images3/greenWallet.svg";
import Person1 from "./images3/person1.jpg";
import Person2 from "./images3/person2.jpg";
import Lock from "./images3/lock.svg";
import Comments from "./images3/comments.svg";
import Network from "./images3/network.svg";
import Peers from "./images3/peers.svg";

export const blueSection = [
  {
    id: "1",
    image: BlueTick,
    altText: "blue-tick-img",
    title: "Get verified quickly",
    desc: "Just sign up, upload your verification document and open your account",
  },
  {
    id: "2",
    image: BlueWaller,
    altText: "blue-wallet-img",
    title: "Buy Dogecoin",
    desc: "Select which coin you would like to buy and how much you would like to purchase",
  },
  {
    id: "3",
    image: BlueTime,
    altText: "blue-time-img",
    title: "Receive Coins",
    desc: "We will send your coins to your wallet within 15 min of payment approval",
  },
];

export const greenSection = [
  {
    id: "1",
    image: GreenTick,
    altText: "green-tick-img",
    title: "Get verified quickly",
    desc: "Just sign up, upload your verification document and open your account",
  },
  {
    id: "2",
    image: GreenWallet,
    altText: "green-wallet-img",
    title: "Sell Dogecoin",
    desc: "Select Dogecoin under the 'sell' tab and decide how much you want to sell",
  },
  {
    id: "3",
    image: GreenTimer,
    altText: "green-time-img",
    title: "Receive Cash",
    desc: "We will send your coins to your wallet within 15 min of payment approval",
  },
];

export const bigData = [
  {
    id: 1,
    imgSrc: Person1,
    imgAlt: "person1-img",
    heading: "Why Buy & Sell Dogecoin with Xcoins?",
    points: [
      {
        img: Lock,
        altText: "lock-icon",
        contentHead: "Encryption Technology",
        contentDesc:
          "Xcoins reputation for speed and security will keep you coming back. World-class encryption technology keeps your data secure and your transactions safe. ",
      },
      {
        img: Comments,
        altText: "comments-icon",
        contentHead: "Customer care",
        contentDesc:
          "If you have any questions about Dogecoin or how to buy & sell it, you can contact our 24/7 customer support team",
      },
    ],
  },
  {
    id: 2,
    imgSrc: Person2,
    imgAlt: "person2-img",
    heading: "Is Dogecoin For Me?",
    points: [
      {
        img: "",
        altText: "",
        contentHead: "",
        contentDesc:
          "Dogecoin, although created for fun, has recently had a large price surge. Its growth in popularity also means that more companies are accepting it as a form of payment. ",
      },
    ],
  },
];

export const aboutDogeimg = [
  {
    id: 1,
    image: Network,
    altText: "network-img",
    title: "Decetralized",
  },
  {
    id: 2,
    image: Peers,
    altText: "peers-img",
    title: "Peer-to-peer",
  },
];

export const spendDogeData = [
  {
    id: 1,
    image: Person1,
    altText: "person1-alt",
    title: "Clothing stores",
  },
  {
    id: 2,
    image: Person1,
    altText: "person1-altText",
    title: "Domains & Hosting",
  },
  {
    id: 3,
    image: Person1,
    altText: "person1-text",
    title: "onlince casinos",
  },
];
