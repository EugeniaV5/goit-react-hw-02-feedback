export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => {
        return (
          <button
            type="button"
            key={option}
            id={option}
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};
