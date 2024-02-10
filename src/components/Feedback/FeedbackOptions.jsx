// Компонент для відображення кнопок відгуків

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="btn-wrapper">
      {options.map(option => (
        <button
          className="button"
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
