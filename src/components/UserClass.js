import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.name + "Child Contructor");
  }

  componentDidMount() {
    // console.log(this.props.name + "Child Component Did Mount");
  }

  render() {
    const { name, location } = this.props;
    // console.log(name + "Child render");
    return (
      <div className="user-card">
        <h2>Name : {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: pwsd21@github.com</h4>
      </div>
    );
  }
}

export default UserClass;
