import "./Activity.css";

const Activity = ({ item, addToCart }) => {
  return (
    <div>
      <div className="activity-card">
        <img src={item.img} alt="" />
        <h3 style={{ marginTop: "10px" }}>{item.name}</h3>
        <p className="activity-info">{item.des}</p>
        <p>
          Time required: <span style={{ fontWeight: 600 }}>{item.time}</span>{" "}
        </p>
        <button className="activity-btn" onClick={() => addToCart(item)}>
          Add to list
        </button>
      </div>
    </div>
  );
};

export default Activity;
