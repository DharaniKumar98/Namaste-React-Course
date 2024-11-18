import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>About</h1>
        {/* <User name="Dharani Kumar(function)" /> */}
        <UserClass name="Dharani Kumar(class)" location="India Class" />
      </div>
    );
  }
}

export default About;
