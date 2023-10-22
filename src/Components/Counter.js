// Counter.js

import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../REDUX/actions";

const Counter = ({ increment, decrement }) => {
  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

export default connect(mapStateToProps, { increment, decrement })(Counter);
