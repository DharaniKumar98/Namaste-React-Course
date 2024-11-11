import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const jsxHeading = <h1>Hello from React!</h1>;
console.log(jsxHeading);

const Greeting = ({ name }) => <h1>Hello, {name}!</h1>;
const element = <Greeting name="Alice" />;

// React functional Components
const H2Component = () => {
  return <h1>"React Functional Component with return in curlybraces"</h1>;
};

// Component Compostion 
// different ways of using a component in another component
const HComponent = () => (
  <div id="container">
    <H2Component/>
    <H2Component></H2Component>
    {H2Component()}
    {jsxHeading} 
    <h1>"React Functional Component without return in paranthesis"</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(jsxHeading); - this how we reneder a react element
root.render(<HComponent />); //- this how we render a react Component
