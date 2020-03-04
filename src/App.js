import React, { Component } from "react";
import DiceRoller from "./components/DiceRoller";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    const dice = [4, 6, 8, 10, 12, 20];
    return (
      <div className="container">
        <DiceRoller diceTypes={dice} />
      </div>
    );
  }
}

export default App;
