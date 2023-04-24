import React, { Component } from "react";
import RegCom from "./RegCom";
import PureCom from "./PureCom";

export default class ParentCom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "MyReactApplication",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "MyReactApplication",
      });
    }, 3000);
  }
  render() {
    return (
      <div>
        This is Parent Component.
        <br />
        <RegCom name={this.state.name} />
        <PureCom name={this.state.name} />
      </div>
    );
  }
}
