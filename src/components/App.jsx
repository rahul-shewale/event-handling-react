import React, { useState } from "react";

function App() {
  const [headingText, setheadingText] = useState("Hello");
  const [ismouseOver, setmouseOver] = useState(false);
  function Event() {
    setheadingText("submitted");
  }
  function overEvent() {
    setmouseOver(true);
  }
  function outEvent() {
    setmouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: ismouseOver ? "black" : "white" }}
        onClick={Event}
        onMouseOver={overEvent}
        onMouseOut={outEvent}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
