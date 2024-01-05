
export const FeedbackOptions = (props) => {
  const option = Object.keys(props.options);
  const handleChange = (e) => {
    props.handleButtonClick(e.target.value);
  }
  return (
    <div>
      <h2>Please leave feedback</h2>
      {option.map((option, index) => (
        <button
          key={index} value={option}
          onClick={handleChange}>{option}</button>
      ))}
    </div>
  );
};
