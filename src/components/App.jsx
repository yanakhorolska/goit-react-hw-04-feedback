import React, { Component } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './NotificationMessage';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round(this.state.good / (this.countTotalFeedback() / 100));
  };
  onLeaveFeedback = event => {
    const buttonName = event.target.dataset.action;
    this.setState(prevState => {
      return { [buttonName]: prevState[buttonName] + 1 };
    });
  };
  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              goodFeedback={this.state.good}
              neutralFeedback={this.state.neutral}
              badFeedback={this.state.bad}
              totalFeedback={this.countTotalFeedback()}
              positiveFeedback={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </div>
    );
  }
}
export default App;
