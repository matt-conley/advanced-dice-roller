import React, { Component } from "react";
import NumBox from "./numBox";

class DiceRoller extends Component {
  state = {
    d4: { totalRolls: 1, modifier: 0, result: undefined },
    d6: { totalRolls: 1, modifier: 0, result: undefined },
    d8: { totalRolls: 1, modifier: 0, result: undefined },
    d10: { totalRolls: 1, modifier: 0, result: undefined },
    d12: { totalRolls: 1, modifier: 0, result: undefined },
    d20: { totalRolls: 1, modifier: 0, result: undefined },
    d100: { totalRolls: 1, modifier: 0, result: undefined }
  };

  rollDice = dice => {
    let diceType = "d" + dice;
    let { modifier, totalRolls } = this.state[diceType];
    let result = 0;
    for (let i = 0; i < totalRolls; i++) {
      let thisRoll = Math.ceil(Math.random() * dice + modifier);
      console.log("this roll = ", thisRoll, " added to ", result);
      result += thisRoll;
    }
    let diceClone = this.state[diceType];
    diceClone.result = result;
    this.setState({ diceClone });
  };

  handleIncrement = (dice, box) => {
    dice = "d" + dice;
    console.log(dice, "increment clicked on", box);
    let diceType = this.state[dice];
    diceType[box]++;
    this.setState({ diceType });
  };

  handleDecrement = (dice, box) => {
    dice = "d" + dice;
    console.log(dice, "increment clicked on", box);
    let diceType = this.state[dice];

    //Dont allow totalRolls to decrement below 1
    if (box !== "totalRolls") {
      diceType[box]--;
    } else if (diceType.totalRolls > 1) {
      diceType[box]--;
    }

    this.setState({ diceType });
  };

  handleChange = () => {
    console.log("value changed");
  };

  render() {
    const { diceTypes } = this.props;
    return (
      <React.Fragment>
        <table className="table table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Die</th>
              <th scope="col">Total Rolls</th>
              <th scope="col">Modifier</th>
              <th scope="col">Result</th>
            </tr>
          </thead>
          <tbody>
            {diceTypes.map(dice => (
              <tr key={dice}>
                <th scope="row">D{dice}</th>
                {/* TOTAL ROLLS SELECTOR */}
                <td>
                  <NumBox
                    value={this.state["d" + dice].totalRolls}
                    onIncrement={() => this.handleIncrement(dice, "totalRolls")}
                    onDecrement={() => this.handleDecrement(dice, "totalRolls")}
                    onChange={this.handleChange}
                  />
                </td>
                {/* MODIFIERS SELECTOR */}
                <td>
                  <NumBox
                    value={this.state["d" + dice].modifier}
                    onIncrement={() => this.handleIncrement(dice, "modifier")}
                    onDecrement={() => this.handleDecrement(dice, "modifier")}
                    onChange={this.handleChange}
                  />
                </td>
                {/* RESULTS */}
                <td>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => this.rollDice(dice)}
                      >
                        Roll
                      </button>
                    </div>
                    <input
                      type="text"
                      className="form-control roll-result"
                      value={this.state["d" + dice].result}
                      readOnly
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default DiceRoller;
