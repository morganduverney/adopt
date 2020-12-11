import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Pet Adoption in Virginia</h1>
      <Pet name="Kofi" animal="Dog" breed="Mutt" />
      <Pet name="Bayley" animal="Dog" breed="Mutt" />
      <Pet name="Nico" animal="Cat" breed="American Shorthair" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
