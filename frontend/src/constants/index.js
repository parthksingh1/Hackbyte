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
      text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
      backgroundUrl: "./src/assets/benefits/card-1.svg",
      iconUrl: benefitIcon1,
      imageUrl: benefitImage2,
    },
    {
      id: "1",
      title: "Improve everyday",
      text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
      backgroundUrl: "./src/assets/benefits/card-2.svg",
      iconUrl: benefitIcon2,
      imageUrl: benefitImage2,
      light: true,
    },
    {
      id: "2",
      title: "Connect everywhere",
      text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
      backgroundUrl: "./src/assets/benefits/card-3.svg",
      iconUrl: benefitIcon3,
      imageUrl: benefitImage2,
    },
  ];