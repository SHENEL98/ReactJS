import React from "react";
import FunctionalCom from "./components/FunctionalCom";
import { ClassComponent1, ClassComponent2 } from "./components/ClassCom";

function App() {
  return (
   <div>
      <p>This is App.js</p>
      <br/>
      <FunctionalCom />
      <ClassComponent1 />
      <ClassComponent2 />
   </div>
  );
}

export default App;
