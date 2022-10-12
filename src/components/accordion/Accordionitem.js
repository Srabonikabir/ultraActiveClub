import Accordion from "react-bootstrap/Accordion";
import "./Accordionitem.css";
const Accordionitem = () => {
  return (
    <div className="accordcontainer">
      <h1>Frequently Asked Questions</h1>
      <Accordion defaultActiveKey="0" className="accordinnerpart">
        <Accordion.Item eventKey="0">
          <Accordion.Header>How Does React work?</Accordion.Header>
          <Accordion.Body>
            React uses a declarative paradigm that makes it easier to reason
            about your application and aims to be both efficient and flexible.
            It designs simple views for each state in your application, and
            React will efficiently update and render just the right component
            when your data changes
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Difference between props & state?</Accordion.Header>
          <Accordion.Body>
            Props are used to pass data from one component to another. The state
            is a local data storage that is local to the component only and
            cannot be passed to other components. The this. setState property is
            used to update the state values in the component
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>What are the uses of useEffect?</Accordion.Header>
          <Accordion.Body>
            By using this Hook, you tell React that your component needs to do
            something after render. React will remember the function you passed
            (we'll refer to it as our “effect”), and call it later after
            performing the DOM updates.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Accordionitem;
