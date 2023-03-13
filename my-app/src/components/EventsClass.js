import React, { Component } from 'react'

export class EventsClass extends Component {
    clickHandler(){
        console.log("Clicked the class button");
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click me - Events Class</button>
        </div>
    )
  }
}

export default EventsClass