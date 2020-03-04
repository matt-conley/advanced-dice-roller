import React, { Component } from "react";

class DiceRoller extends React.Component {
  state = {
    d4: undefined,
    d6: undefined,
    d8: undefined,
    d10: undefined,
    d12: undefined,
    d20: undefined,
    d100: undefined
  };
  rollDice = dice => {
    let result = Math.ceil(Math.random() * dice);
    dice = "d" + dice;
    this.setState({ [dice]: result });
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
                <td>stuff here</td>
                {/* MODIFIERS SELECTOR */}
                <td>modifiers</td>
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
                      value={this.state["d" + dice]}
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
