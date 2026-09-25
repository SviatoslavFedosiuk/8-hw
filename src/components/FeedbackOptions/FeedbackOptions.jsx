import { List, GreenBtn, BlueBtn, RedBtn } from "./FeedbackOptions.styled";
import { Component } from "react";

class FeedbackOptions extends Component{
    render(){
        const {addCount} = this.props
        return (
            <List>
                <li><GreenBtn type="button" onClick={()=> addCount("good")}>Good</GreenBtn></li>
                <li><BlueBtn type="button"onClick={()=> addCount("neutral")}>Neutral</BlueBtn></li>
                <li><RedBtn type="button"onClick={()=> addCount("bad")}>Bad</RedBtn></li>
            </List>
        )
    }
}
export default FeedbackOptions