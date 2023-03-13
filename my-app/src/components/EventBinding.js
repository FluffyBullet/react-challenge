import React from "react";

class StatefulGreeting extends React.Component { 
   
    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello",
            buttonText: "Exit",
            value: 0,
        };
    }

    handleClick() {
        this.setState({
            introduction: this.state.introduction === "Hello" ?"Goodbye": "Hello",
            buttonText: this.state.buttonText === "Exit" ? "Enter" : "Exit",
        });
        console.log(this.state.introduction);
    }

    addCount() {
        this.setState({
            value: this.state.value +1,
        })
    }
    
    render() {
        return (
            <div>
            <h1> {this.state.introduction}, {this.props.greeting} </h1>
            <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
            <button onClick={ () => this.addCount()}>Count: {this.state.value}</button>
            </div>
        )
    }
}

export default StatefulGreeting;