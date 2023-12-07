export const FeedbackOptions = props => {
  return (
    <div>
      <h2>Please leave feedback</h2>
      {props.feedbackOptions.map(option => {
        <button onClick={() => props.handleButtonClick(option)}>{option}</button>;
      })}
    </div>
  );
};