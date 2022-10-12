import "./Cart.css";

const Cart = ({ cart, breakTimeChange, time, active }) => {
  let sum = 0;
  cart.map((e) => {
    sum = sum + parseInt(e.time);
  });

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
      <p style={{ marginTop: "40px", marginBottom: "20px" }}>
        <span>
          <h2>Add A Break </h2>
        </span>
      </p>
      <div className="time-btn-container" style={{ marginBottom: "40px" }}>
        <button className="time-btn" onClick={() => breakTimeChange(10)}>
          10s
        </button>
        <button className="time-btn" onClick={() => breakTimeChange(20)}>
          20s
        </button>
        <button className="time-btn" onClick={() => breakTimeChange(30)}>
          30s
        </button>
        <button className="time-btn" onClick={() => breakTimeChange(40)}>
          40s
        </button>
      </div>
      <p>
        <span>
          <h3>Exercises Details</h3>
        </span>
      </p>
      <div className="ex-time">
        <div className="ex-time-div">
          <p style={{ fontWeight: "600" }}> Exercise time:</p>
          <p> {sum} seconds</p>
        </div>
        <div className="ex-time-div">
          <p style={{ fontWeight: "600" }}> Break time:</p>
          <p> {time} seconds</p>
        </div>
      </div>

      <button className="complete-btn">Activity Completed</button>
    </div>
  );
};

export default Cart;
