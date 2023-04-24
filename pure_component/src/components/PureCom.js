import React, { PureComponent } from 'react'

export class PureCom extends PureComponent {
  render() {
    return (
      <div>This is Pure Component :- {this.props.name} </div>
    )
  }
}

export default PureCom