import React from "react";
import ReactDOM from "react-dom";
import ExamplePage from "./pages/ExamplePage";

function App() {
  return (
    <div className="App">
      <ExamplePage />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
