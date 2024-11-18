import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count :0,
      userInfo: {
        name: "Dummy",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/DharaniKumar98");

    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("Component Updated - (will be triggered when the state updates)");
  }

  componentWillUnmount() {
    console.log("Component will removed from the DOM(unmounted)");
  }

  render() {
    const { name, login } = this.state.userInfo;
    const { count } = this.state;

    return (
      <div className="user-card">
        <h1>count : {count}</h1>
        <button
          onClick={() => {
            this.setState({ count: count + 1 });
          }}
        >
          Increment Count
        </button>
        <h2>Name: {name}</h2>
        <h3>LoginId: {login}</h3>
        <h3>Contact: @GDharaniKumar4u</h3>
      </div>
    );
  }
}

export default UserClass;
