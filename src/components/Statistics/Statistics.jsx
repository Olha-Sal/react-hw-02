// Компонент для відображення статистики відгуків

export const Statistics = ({
  good,
  neutral,
  bad,
  getTotal,
  getPositivePercentage,
}) => {
  return (
    <div>
      <div className="statistics-wrapper">
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
      </div>
      <div className="total-wrapper">
        <p>Total: {getTotal}</p>
        <p>Positive feedback: {getPositivePercentage}%</p>
      </div>
    </div>
  );
};
