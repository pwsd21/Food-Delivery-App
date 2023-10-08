// creating and Element and rendering it into root
//using createElement and createRoot method of React and ReactDOM lib resp

// nested html structure inside react application

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "GOAT")
  )
);

// creates a react object for you
const heading = React.createElement(
  "h1",
  {
    id: "heading",
    abc: "ppp",
  },
  "Kanishka"
);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);

// this is used to convert this object toh1 tag and put it onto the DOM
root.render(parent);
