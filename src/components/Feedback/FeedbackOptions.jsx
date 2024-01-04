// export const FeedbackOptions = props => {
//   return (
//     <div>
//       <h2>Please leave feedback</h2>
//       {props.feedbackOptions.map(option => {
//         <button onClick={() => props.handleButtonClick(option)}>{option}</button>;
//       })}
//     </div>
//   );
// };

export const FeedbackOptions = (props) => {
  const option = Object.keys(props.options);

  return (
    <div>
      <h2>Please leave feedback</h2>
      {option.map((option) => (
        <button
          key={option}
          onClick={() => props.handleButtonClick(option)}>{option}</button>
      ))}
    </div>
  );
};