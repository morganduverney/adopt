import { createElement } from "react";
import { render } from "react-dom";

const Pet = ({ name, animal, breed }) => {
  return createElement("div", {}, [
    createElement("h1", {}, name),
    createElement("h2", {}, animal),
    createElement("h2", {}, breed),
  ]);
};

const App = () => {
  return createElement("div", {}, [
    createElement("h1", {}, "Pet Adoption in Virginia"),
    createElement(Pet, { name: "Kofi", animal: "Dog", breed: "Mutt" }),
    createElement(Pet, { name: "Bayley", animal: "Dog", breed: "Mutt" }),
    createElement(Pet, {
      name: "Nico",
      animal: "Cat",
      breed: "American Shorthair",
    }),
  ]);
};

render(createElement(App), document.getElementById("root"));
