const Pet = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Kofi"),
    React.createElement("h2", {}, "Dog"),
    React.createElement("h2", {}, "Mutt"),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Pet Adoption in Virginia"),
    React.createElement(Pet),
    React.createElement(Pet),
    React.createElement(Pet),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
