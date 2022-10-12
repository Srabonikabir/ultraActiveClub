import "./Activity.css";

const Activity = ({ item }) => {
  return (
    <div>
      <div className="activity-card">
        <img src={item.img} alt="" />
        <p>Name: {item.name} </p>
        <p>Time: {item.time} </p>
        <button>Add to list</button>
      </div>
    </div>
  );
};

export default Activity;
