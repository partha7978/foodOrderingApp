import User from "./User";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }
  render() {
    return (
      <>
        <User name="Partha" location="Bangalore" />
      </>
    );
  }
}
export default About;
