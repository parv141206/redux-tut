// App.js

import React from "react";
import { Provider } from "react-redux";
import { store } from "./REDUX/store";
import Counter from "./Components/Counter";
import DisplayCount from "./Components/DisplayCount";
import Name from "./Components/Name";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <DisplayCount />
        <Counter />
        <Name />
      </div>
    </Provider>
  );
}

export default App;
