import React from "react";
import { BsFillAlarmFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import "./Exercise.css";
import Activity from "../activity-card/Activity";

const Exercise = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch("activities.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);

  return (
    <div className="homepage">
      <div className="header">
        <BsFillAlarmFill className="icon" />
        <h2 className="title">Activity Club</h2>
      </div>
      {/* <div className="activity-cards">
        {activities.map((item) => (
          <Activity key={item.id} item={item}></Activity>
        ))}
      </div> */}
    </div>
  );
};

export default Exercise;
