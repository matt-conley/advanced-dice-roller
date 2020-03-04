import React from "react";

const NumBox = props => {
  let { value, onIncrement, onDecrement, onChange } = props;
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <button className="btn btn-online-secondary" onClick={onDecrement}>
          -
        </button>
      </div>
      <input
        type="text"
        className="form-control"
        value={value}
        onChange={onChange}
      />
      <div className="input-group-append">
        <button className="btn btn-online-secondary" onClick={onIncrement}>
          +
        </button>
      </div>
    </div>
  );
};

export default NumBox;
