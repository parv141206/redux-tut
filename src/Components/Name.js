import React, { useState } from "react";
import { connect } from "react-redux";
import { changeName } from "../REDUX/actions";

const Name = ({ name, changeName }) => {
  const [newName, setNewName] = useState(""); // Initialize a local state for the new name

  const handleNameChange = () => {
    changeName(newName); // Dispatch the action with the new name
  };

  return (
    <div>
      <h1>Name: {name}</h1>
      <input
        type="text"
        placeholder="Enter a new name"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleNameChange}>
        Change Name
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.name,
  };
};

export default connect(mapStateToProps, { changeName })(Name);
