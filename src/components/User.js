import React from "react";
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
            count: 0,
        }
    }
  render() {
    const { name, location} = this.props;
    const { count} = this.state;
    return (
      <div className="user__card">
        <h1>Count: {count}</h1>
        <h2>Name: {name}</h2>
        <p>Location: {location}</p>
        <p>Phone: 1234567890</p>
        <p>Email: 8XOgT@example.com</p>
        <button onClick={() => this.setState({ count: count + 1})}>Click</button> --------start from 46min
      </div>
    );
  }
}

export default User;