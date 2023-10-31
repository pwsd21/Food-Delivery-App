import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        login: "DefaultName",
        location: "DefaultLocation",
      },
    };
    // console.log("parent constructor");
  }

  async componentDidMount() {
    // console.log("Parent component did mount");
    const data = await fetch("https://api.github.com/users/pwsd21");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("component DId Update");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }
  render() {
    // console.log("parent render");
    const { login, location } = this.state.userInfo;
    return (
      <div>
        <h1>About</h1>
        <div>
          LoggedIn User :{" "}
          <UserContext.Consumer>
            {(data) => console.log(data)}
          </UserContext.Consumer>
        </div>
        <UserClass name={login} location={location} />
      </div>
    );
  }
}

export default About;
