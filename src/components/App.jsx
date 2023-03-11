import { Component } from "react";
import { FeedbackOptions } from "./feedback/FeedbackOptions";
import { Section } from "./Section/Section ";
import { Statistics } from "./Statistics/Statistics";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    percentage: 0,
    isStat: false,
  }
  handleClick = e => {
    this.setState(prevState => { return { [e.target.name]: prevState[e.target.name] + 1 } });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
    this.setIsStat();
  }
  countTotalFeedback = () => {
    this.setState({
      total: (this.state.total + 1)

    })
  }
  countPositiveFeedbackPercentage = () => {

    this.setState(prevState => {
      return { percentage: Math.round(prevState.good / prevState.total * 100) }
    })
  }
  setIsStat = () => {

    this.setState(prevState => {
      return { isStat: true }
    })
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
          <FeedbackOptions options="Good" onLeaveFeedback={this.handleClick} name="good" />
          <FeedbackOptions options="Neutral" onLeaveFeedback={this.handleClick} name="neutral" />
          <FeedbackOptions options="Bad" onLeaveFeedback={this.handleClick} name="bad" />
        </Section>
        {this.state.isStat && <Section title={"Statistics"}>
          <Statistics good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.state.total}
            positivePercentage={this.state.percentage} />
        </Section>}


      </div>
    );
  };
}
