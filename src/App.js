const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Pet Adoption in Virginia"),
    React.createElement(Pet, { name: "Kofi", animal: "Dog", breed: "Mutt" }),
    React.createElement(Pet, { name: "Bayley", animal: "Dog", breed: "Mutt" }),
    React.createElement(Pet, {
      name: "Nico",
      animal: "Cat",
      breed: "American Shorthair",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
