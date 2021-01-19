import React, {useState} from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import MainPage from "./components/Main";

function App() {
  const [isActive, setActive] = useState("false");
  const todoAppHandler = () => {
    setActive(!isActive);
    console.log(isActive);
  };
  return (
    <Router>
      <Link to="/main">
        <button
          type="button"
          id="goTodoApp"
          onClick={todoAppHandler}
          className={`button ${isActive ? "" : "non-visible"}`}
        >
          Todo App
        </button>
      </Link>
      <Switch>
        <Route path="/main" component={MainPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
