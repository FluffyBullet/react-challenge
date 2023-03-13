import css from './css/NavBarSimple.module.css';
import React from "react";

class NavBarSimple extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            message: "Hello, guest!",
            buttonText: "log in"
        }
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
            console.log("Previous State", prevState);
            console.log("Previous props:", prevProps);
            return {
            message: this.state.message === "Hello, guest!" ? `Welcome back, ${this.props.name}!`: "Hello, guest!",
            buttonText: this.state.buttonText === "log in"? "log out":  "log in",
            }
        });
    };

    render(){
        return (
            <div className={css.NavBar}>
                <h1> My Gallery</h1>
                <span>{this.state.message}</span>
                <button onClick ={ () => this.handleClick()}>{this.state.buttonText}</button>
            </div>
        )
    }
    };

export default NavBarSimple;