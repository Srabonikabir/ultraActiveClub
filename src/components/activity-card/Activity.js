import "./Activity.css";

const Activity = ({ item }) => {
  return (
    <div>
      <div className="activity-card">
        <img src={item.img} alt="" />
        <p>Name: {item.name} </p>
        <p>{{item.des}</p>
        <p>Time: {item.time} </p>
        <button className="activity-btn">Add to list</button>
      </div>
    </div>
  );
};

export default Activity;
