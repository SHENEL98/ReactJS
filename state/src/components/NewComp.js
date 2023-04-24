import React, { Component } from "react";
import bell_icon1 from "./bell_icon.png";
import bell_icon2 from "./bell_icon2.png";

class NewComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Subscribe Message..",
      sub: "Subcribe",
      imageURL: bell_icon1,
    };
  }
  styles = {
    fontStyle: "italic",
    color: "blue",
  };
  Buttonchange = () => {
    this.setState({
      message: "Hit the bell icon to never miss an update",
      sub: "Subscribed",
      imageURL: bell_icon2,
    });
  };
  imageChange=()=>{
    this.setState({
        imageURL: bell_icon2,
        message: "Thank you.. Happy Hacking.. "
    })
  }
  render() {
    return (
      <div className="App">
        <h1 style={this.styles}>{this.state.message}</h1>
        <button onClick={this.Buttonchange}>{this.state.sub}</button>
        <p />
        <img
          style={{ width: "30px", heighr: "30px" }}
          src={this.state.imageURL}
          onClick={this.imageChange}
        />
      </div>
    );
  }
}

export default NewComp;
