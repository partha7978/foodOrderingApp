import React from "react";
import UserContext from "../utils/UserContext";
// const User = () => {
//     return (
//         <div className="user__card">
//             <h2>Name: Partha</h2>
//             <p>Location: Bangalore</p>
//             <p>Phone: 1234567890</p>
//             <p>Email: 8XOgT@example.com</p>
//         </div>
//     );
// }

// export default User;

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "",
        location: "",
        avatar_url: "",
      },
    };

    console.log('constructor');
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/partha7978");
    const user = await data.json();
    this.setState({ userInfo: user });
    // console.log(user);
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  render() {
    // const { name, location } = this.props;
    console.log('render');
    const { name, location } = this.state.userInfo;
    return (
      <div className="user__card">
        <img
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
          }}
          src={this.state.userInfo.avatar_url}
          alt="avatar"
        />
        <h2>Name: 
          <UserContext.Consumer>
            {({loggedInUser}) => <h2 className="font-[500]">{loggedInUser}</h2>}
          </UserContext.Consumer>
        </h2>
        <p>Location: {location}</p>
        <p>Phone: 1234567890</p>
        <p>Email: 8XOgT@example.com</p>
      </div>
    );
  }
}

export default User;
