import React, { Component } from "react";
import { connect } from "react-redux";

class NewComp extends Component {
  styles = {
    fontStyle: "italic",
    color: "purple",
  };

  render() {
    return (
      <div className="App">
        <h3 style={this.styles}>{this.props.message}</h3>
        <button onClick={this.props.ButtonChange}>Follow</button>
      </div>
    );
  }
}
const mapStateProps = (state) => {
  return {
    message: state.message,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    ButtonChange: () => dispatch({ type: "Message change" }),
  };
};

export default connect(mapStateProps, mapDispatchtoProps)(NewComp);
