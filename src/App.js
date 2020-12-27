import React from "react";
import "./App.css";
import Background from "./Components/Background/Background";
import Homepage from "./Pages/Homepage/Homepage";
import { Route } from "react-router-dom";
import Skills from "./Pages/Skills/Skills";
import Projects from "./Pages/Projects/Projects";
import Experience from "./Pages/Experience/Experience";

function App() {
  return (
    <div className="App">
      <Background />
      <Route exact path="/" component={Homepage} />
      <Route exact path="/skills" component={Skills} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/experience" component={Experience} />
    </div>
  );
}

export default App;
