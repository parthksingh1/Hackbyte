import {
    benefitIcon1,
    benefitIcon2,
    benefitIcon3,
    benefitImage2,
    file02,
    homeSmile,
    notification2,
    notification3,
    notification4,
    plusSquare,
    searchMd,
  } from "../assets";
  
  export const navigation = [
    {
      id: "0",
      title: "Home",
      url: "#",
    },
    {
      id: "1",
      title: "Q&A",
      url: "#",
    },
    {
      id: "2",
      title: "Polls",
      url: "#",
    },
    {
      id: "3",
      title: "Confessions",
      url: "",
    },
    {
      id: "4",
      title: "New account",
      url: "#signup",
      onlyMobile: true,
    },
    {
      id: "5",
      title: "Sign in",
      url: "#login",
      onlyMobile: true,
    },
  ];
  
  export const heroIcons = [homeSmile, file02, searchMd, plusSquare];
  
  export const notificationImages = [notification4, notification3, notification2];
  
  export const benefits = [
    {
      id: "0",
      title: "Ask anything",
      text: "Foster open, anonymous dialogue through questioning and answering, promoting uninhibited expression and genuine interaction.",
      backgroundUrl: "./src/assets/benefits/card-1.svg",
      iconUrl: benefitIcon1,
      imageUrl: benefitImage2,
    },
    {
      id: "1",
      title: "Improve everyday",
      text: "Craft intriguing polls anonymously to gather community insights and engage in collaborative decision-making through poll participation.",
      backgroundUrl: "./src/assets/benefits/card-2.svg",
      iconUrl: benefitIcon2,
      imageUrl: benefitImage2,
      light: true,
    },
    {
      id: "2",
      title: "Connect everywhere",
      text: "Confess your feelings openly, without fear or hesitation, in a welcoming, judgment-free environment of complete anonymity.",
      backgroundUrl: "./src/assets/benefits/card-3.svg",
      iconUrl: benefitIcon3,
      imageUrl: benefitImage2,
    },
  ];