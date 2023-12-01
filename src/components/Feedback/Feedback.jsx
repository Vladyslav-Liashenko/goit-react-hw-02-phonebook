import { Component } from 'react';

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedback: 0,
  };

  handleButtonClick = status => {
    this.setState({ status: this.state[status]++ });
    this.countTotalFeedback();
    // this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    this.setState({total});
    this.countPositiveFeedbackPercentage();
  };

  countPositiveFeedbackPercentage = () => {
    const { good, total } = this.state;
    const positiveFeedback = (good / total) * 100;
    this.setState(state => {
      return { positiveFeedback: (state.good / state.total) * 100 };
    });
  };

  render() {
    return (
      <div>
        <div>
          <h2>Please leave feedback</h2>
          <button onClick={() => this.handleButtonClick('good')}>Good</button>
          <button onClick={() => this.handleButtonClick('neutral')}>
            Neutral
          </button>
          <button onClick={() => this.handleButtonClick('bad')}>Bad</button>
        </div>
        <div>
          <h2>Statistics</h2>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p>Total: {this.state.total}</p>
          <p>Positive feedback: {this.state.positiveFeedback} %</p>
        </div>
      </div>
    );
  }
}
