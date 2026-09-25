import Title from './components/Title/Title'
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions'
import StatisticsText from './components/StatisticsText/StatisticsText'
import Statistics from './components/Statistics/Statistics'
import Notification from './components/Notification/Notification'
import { Component } from 'react'
import './App.css'

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  addNumberStats = feedback => {
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1
    }))
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state

    return good + neutral + bad
  }

  countPositiveFeedback = () => {
    const { good } = this.state
    const total = this.countTotalFeedback()

    if (total === 0) {
      return 0
    }

    return (good / total) * 100
  }

  render() {
    const total = this.countTotalFeedback()

    return (
      <>
        <Title />

        <FeedbackOptions addCount={this.addNumberStats} />

        <StatisticsText />

        {total > 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={total}
            positivePercentage={this.countPositiveFeedback()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    )
  }
}

export default App