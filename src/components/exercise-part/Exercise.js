import React from "react";
import { BsFillAlarmFill } from "react-icons/bs";
import "./Exercise.css";
import Activity from "../activity-card/Activity";
const Exercise = ({ activities, addToCart }) => {
  const addtocart = (exercise) => {
    addToCart(exercise);
  };

  return (
    <div className="homepage">
      <div className="header">
        <BsFillAlarmFill className="icon" />
        <h2 className="title">Activity Club</h2>
      </div>
      <div className="activity-cards">
        {activities.map((item) => (
          <Activity key={item.id} item={item} addToCart={addtocart}></Activity>
        ))}
      </div>
    </div>
  );
};

export default Exercise;
