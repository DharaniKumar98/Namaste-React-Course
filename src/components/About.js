import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/userContext";

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>About</h1>
        <div>
          LoggedIn User : 
          <UserContext.Consumer>
            {({loggedInUser}) => <p className="text-lg font-extrabold">{loggedInUser}</p>}
          </UserContext.Consumer>
        </div>
        {/* <User name="Dharani Kumar(function)" /> */}
        <UserClass name="Dharani Kumar(class)" location="India Class" />
      </div>
    );
  }
}

export default About;
