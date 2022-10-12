const addToDB = (breakTime) => {
  let timeValue = localStorage.getItem("timeBreak");
  if (timeValue) {
    localStorage.removeItem("timeBreak");
    localStorage.timeBreak = breakTime;
  } else {
    localStorage.timeBreak = breakTime;
  }
};

const getTimeInfo = () => {
  let time = localStorage.getItem("timeBreak");
  if (time) {
    return time;
  } else {
    return 0;
  }
};

export { addToDB, getTimeInfo };
