const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Pet Adoption in Virginia"),
    React.createElement(Pet, { name: "Kofi", animal: "Dog", breed: "Mutt"}),
    React.createElement(Pet, { name: "Bayley", animal: "Dog", breed: "Mutt"}),
    React.createElement(Pet, { name: "Nico", animal: "Cat", breed: "American Shorthair"}),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
