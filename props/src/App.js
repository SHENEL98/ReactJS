import React from "react";
import Classprops from "./Classprops";
import Functionprops from "./Functionprop";

function App() {
  return (
    <div>
      <Classprops name="Class Props 1" place="Place 1">
        <p>Child component</p> </Classprops>
      <Classprops name="Class Props 2" place="Place 2">
        <button>Click</button> </Classprops>
      <Classprops name="Class Props 3" place="Place 3"/>

      <Functionprops name="Functional 1" place="Place F1"/>
    </div>
  );
}

export default App;
