import Title from './components/Title/Title'
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions'
import StatisticsText from './components/StatisticsText/StatisticsText'
import Statistics from './components/Statistics/Statistics'
import { Component } from 'react'
import './App.css'

class App extends Component{
  state = {
  good: 0,
  neutral: 0,
  bad: 0
}
 addNumberStats = (feedback) => {
 if (feedback === "good")
  this.setState({
    good: this.state.good + 1
  })
  if (feedback === "neutral")
  this.setState({
    neutral: this.state.neutral + 1
  })
  if (feedback === "bad")
  this.setState({
    bad: this.state.bad + 1
  })
}

  render(){
  return (
    <>
    <Title/>
    <FeedbackOptions addCount={this.addNumberStats}/>
    <StatisticsText/>
    <Statistics good={this.state.good}
    neutral={this.state.neutral}
    bad={this.state.bad}/>
    </>
  )}
}
export default App
