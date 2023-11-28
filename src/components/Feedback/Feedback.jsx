export const Feedback = () => {
  class Counter extends Comment {
    state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  const handleButtonClick = () => {};

  return (
    <div>
      <div>
        <h2>Please leave feedback</h2>
        <button onClick={() => handleButtonClick('good')}>Good</button>
        <button onClick={() => handleButtonClick('neutral')}>Neutral</button>
        <button onClick={() => handleButtonClick('bad')}>Bad</button>
      </div>
      <div>
        <h2>Statistics</h2>
        <p>Good: {this.good}</p>
        <p>Neutral: {this.neutral}</p>
        <p>Bad: {this.bad}</p>
      </div>
    </div>
  );
};
