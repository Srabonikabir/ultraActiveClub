import "./App.css";
import Exercise from "./components/exercise-part/Exercise";
import Cart from "./components/cart-part/Cart";
import Accordionitem from "./components/accordion/Accordionitem";
import { useState, useEffect } from "react";
import { addToDB, get, getTimeInfo } from "./utilities/common/function.js";

function App() {
  const [activities, setActivities] = useState([]);
  const [cart, setCart] = useState([]);
  const [breaktime, setBreaktime] = useState();
  const [activeButton, setActiveButton] = useState("none");

  const addToCart = (exerciseObject) => {
    setActiveButton(exerciseObject.name);
    console.log(activeButton);
    const newCart = [...cart, exerciseObject];
    setCart(newCart);
  };

  const changeBreaktime = (choice) => {
    setBreaktime(choice);
    addToDB(choice);
  };

  useEffect(() => {
    fetch("activities.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);

  useEffect(() => {
    const t = getTimeInfo();
    setBreaktime(t);
  }, []);

  return (
    <div className="App">
      <div className="App-inner">
        <Exercise
          activities={activities}
          addToCart={addToCart}
          activeButton={activeButton}
        ></Exercise>
        <Cart
          cart={cart}
          breakTimeChange={changeBreaktime}
          time={breaktime}
        ></Cart>
      </div>
      <Accordionitem></Accordionitem>
    </div>
  );
}

export default App;
