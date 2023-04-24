import React, { Component } from 'react'

class Classprops extends Component {
  render() {
    return (
      <div>
        This is {this.props.name} and 
        place is {this.props.place}
        {this.props.children}
      </div>
    )
  }
}

export default Classprops;