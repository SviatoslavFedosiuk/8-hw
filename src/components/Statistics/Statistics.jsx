import { } from "./Statistics.styled";
import { Component } from "react";

class Statistics extends Component{
    
    render(){

        const {good, neutral, bad} = this.props;
        return (
        <ul>
            <li>
                <p>Good:</p>
                <span>{good}</span>
            </li>
            <li>
                <p>Neutral:</p>
                <span>{neutral}</span>
            </li>
            <li>
                <p>Bad:</p>
                <span>{bad}</span>
            </li>
            <li>
                <p>Total:</p>
                <span></span>
            </li>
            <li>
                <p>Positive feedback:</p>
                <span></span>
            </li>
        </ul>
        )
    }
}
export default Statistics