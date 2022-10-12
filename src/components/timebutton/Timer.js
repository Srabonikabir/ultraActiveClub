import "./Timer.css";
const Timer = ({ timeChange, seconds }) => {
  const arr = [10, 20, 30, 40];
  let color = "time-btn btn btn-light";
  return arr.map((t) => (
    <button
      key={t}
      className="time-btn"
      style={{ backgroundColor: t == seconds ? "#FFFFE0" : "	#D3D3D3" }}
      onClick={() => timeChange(t)}
    >
      {t}s
    </button>
  ));
};

export default Timer;
