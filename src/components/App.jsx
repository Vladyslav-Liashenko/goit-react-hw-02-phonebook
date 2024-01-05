import { Statistics } from './Feedback/Statistics';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Component } from 'react';
import { Notification } from './Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedback: 0,
  };

  feedbackOptions = {
    good: 'good',
    bad: 'bad',
    neutral: 'neutral',
  };

  handleButtonClick = status => {
    let sum = this.state[status]++;
    this.setState({ status: sum });
    this.countTotalFeedback();
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    this.setState({ total });
    this.countPositiveFeedbackPercentage();
  };

  countPositiveFeedbackPercentage = () => {
    const { good, total } = this.state;
    const positiveFeedback = (good / total) * 100 || 0;
    const fixedNumber = positiveFeedback.toFixed(0);
    this.setState({ positiveFeedback: fixedNumber });
  };
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <FeedbackOptions
          options={this.feedbackOptions}
          handleButtonClick={this.handleButtonClick}
        />
        {this.state.positiveFeedback ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.state.total}
            positiveFeedback={this.state.positiveFeedback}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </div>
    );
  }
}
