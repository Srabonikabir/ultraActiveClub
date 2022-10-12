import "./Cart.css";

const Cart = () => {
  return (
    <div className="cart-container">
      <div className="intro-part">
        <img
          src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png"
          alt="not available"
        />
        <h3>Yeasin Zilani</h3>
      </div>
      <div className="info-container">
        <div className="infodiv">
          <span>
            <span style={{ fontSize: "25px", fontWeight: "700" }}>91</span>
            <span style={{ fontSize: "15px", color: "#A7C7E7" }}>kg</span>
          </span>
          <span style={{ color: "rgb(169,169,169)" }}>Weight</span>
        </div>
        <div className="infodiv">
          <span>
            <span style={{ fontSize: "25px", fontWeight: "700" }}>6.2</span>
          </span>
          <span style={{ color: "rgb(169,169,169)" }}>Height</span>
        </div>
        <div className="infodiv">
          <span>
            <span style={{ fontSize: "25px", fontWeight: "500" }}>22</span>
            <span style={{ fontSize: "15px", color: "#A7C7E7" }}>yrs</span>
          </span>
          <span style={{ color: "rgb(169,169,169)" }}>Age</span>
        </div>
      </div>
      <p>
        <span>Add A Break</span>
      </p>
      <div className="time-btn-container">
        <button className="time-btn">10s</button>
        <button className="time-btn">20s</button>
        <button className="time-btn">30s</button>
        <button className="time-btn">40s</button>
      </div>
      <p>
        <span>Exercises Details</span>
      </p>
      <div className="ex-time">
        <div className="ex-time-div">
          <p> Exercise time:</p>
          <p> 200 seconds</p>
        </div>
        <div className="ex-time-div">
          <p> Exercise time:</p>
          <p> 200 seconds</p>
        </div>
      </div>

      <button className="complete-btn">Activity Completed</button>
    </div>
  );
};

export default Cart;
