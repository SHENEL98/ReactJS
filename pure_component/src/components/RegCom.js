import React, { PureComponent } from 'react'

export class RegCom extends PureComponent {
  render() {
    return (
      <div>This is Regular component :- {this.props.name} </div>
    )
  }
}

export default RegCom