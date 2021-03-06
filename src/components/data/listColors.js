import React, { Component } from 'react';
import "./selectList.scss"

class ListColors extends Component {
    constructor(props){
        super(props);
        this.state = {
            bgColor: null,
        }

        this.onSelectBackground = this.onSelectBackground.bind(this)
    }

    onSelectBackground = event => {
        this.setState({bgColor: event.target.value})
    }
    
    render() {
        let styles = {};

        if (this.state.bgColor) {
            if (this.state.bgColor === "blue" || this.state.bgColor === "black" || this.state.bgColor === "green" || 
                this.state.bgColor === "brown" || this.state.bgColor === "purple" || 
                    this.state.bgColor === "red"
                ) {
                styles.color = "white"
            }
            if (this.state.bgColor === "none") {
                styles.backgroundColor = "white";
                styles.color = "black"
            }

            styles.backgroundColor = this.state.bgColor;
        }

        return(
            <select size="1" onChange={this.onSelectBackground} style={styles}>
                <option className="none" value="none">None</option>
                <option className="black" value="black">Black</option>
                <option className="white" value="white">white</option>
                <option className="blue" value="blue">blue</option>
                <option className="green" value="green">green</option>
                <option className="brown" value="brown">brown</option>
                <option className="lightGreen" value="lightGreen">lightGreen</option>
                <option className="orange" value="orange">orange</option>
                <option className="pink" value="pink">pink</option>
                <option className="purple" value="purple">purple</option>
                <option className="red" value="red">red</option>
                <option className="turquoise" value="turquoise">turquoise</option>
                <option className="yellow" value="yellow">yellow</option>
            </select>
        )
    }
}

export default ListColors;