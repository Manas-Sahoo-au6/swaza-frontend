import React from "react";
import member1 from "../../assets/Placeholder.png";
import member3 from "../../assets/Solution.png";
import SliderComponent from "../Slider/Slider";
import classes from "./Team.module.css";
const team = [
  {
    image: member1,
    name: "Jarvis",
    role: "intern",
  },
  {
    image: member3,
    name: "Jade",
    role: "pending",
  },
  {
    image: member1,
    name: "Jeremy",
    role: "socio",
  },
  {
    image: member3,
    name: "Chris",
    role: "trouble",
  },
  {
    image: member1,
    name: "Swahney",
    role: "coffee maker",
  },
  {
    image: member3,
    name: "Kanhaiya Vashisht",
    role: "vella",
  },
  {
    image: member1,
    name: "Jarvis",
    role: "intern",
  },
  {
    image: member3,
    name: "Jade",
    role: "pending",
  },
  {
    image: member1,
    name: "Jarvis",
    role: "intern",
  },
  {
    image: member3,
    name: "Jade",
    role: "pending",
  },
];
const Team = () => {
  const processedMembers = team.map((item) => {
    return (
      <div className={classes.CardContainer}>
        <img className={classes.CardImage} src={item.image} alt={item.name} />
        <div className={classes.CardName}>{item.name}</div>
        <div className={classes.CardRole}>{item.role}</div>
      </div>
    );
  });

  const filteredMembers = processedMembers
    ? processedMembers.filter(Boolean)
    : [];
  return (
    <div className={classes.MainContainer}>
      <div className={classes.Introduction}>
        <div className={classes.IntroductionHeader}>Meet top Swaza Squad</div>
        <div className={classes.IntroductionDescription}>
          Meet our top Swaza's who have changed the lives of so many people in
          thei field of expertise.
          <br /> Join them and become a part of such inspiring events
        </div>
      </div>
      <div className={classes.Carousel}>
        <SliderComponent comp={filteredMembers} />
      </div>
    </div>
  );
};

export default Team;
