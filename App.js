const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World! from React"
);

console.log(heading); // here is heading is not an HTML element , it is a js object

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root);

//root.render(h1Eelement);

// this render function takes the js obejct, converts to HTML element &
//adds that HTML element to root HTML element defined using root

// how to create nested HTML elements using the above React API.
// like

/*
<div ="parent">
    <div id="child">
        <h1> </h1>
    </div>
</div>
*/

const nested = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "child1 h1 Hello"),
    React.createElement("h2", {}, "child1 h2 Hello"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "child2 h1 Hello"),
    React.createElement("h2", {}, "child2 h2 Hello"),
  ]),
]);

// to avoid this complexity - JSX is used
// JSX is simplifies the way we create HTML elements using react

root.render(nested);
