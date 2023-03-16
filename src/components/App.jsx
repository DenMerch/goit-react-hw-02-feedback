import { Component } from "react";
import { FeedbackOptions } from "./feedback/FeedbackOptions";
import { Section } from "./Section/Section ";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from './Notification/Notification'


let isState = false;
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
  handleClick = e => {
    this.setState(prevState => { return { [e.target.name]: prevState[e.target.name] + 1 } });
    isState = true
  }
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  }
  render() {
    return (
      <div
        style={{
          flexDirection: "column",
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <Section title={"Please leave feedback"}>
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleClick} />
        </Section>
        {isState ? <Section title={"Statistics"}>
          <Statistics good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()} />
        </Section>
          : <Notification message="There is no feedback" />}
      </div>
    );
  };
}
