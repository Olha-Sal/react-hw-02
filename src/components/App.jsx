import React, { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Section } from './Section/Section';
import { Message } from './Message/Message';

const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // Функція для збільшення кількості відгуків відповідної категорії
  const handleFeedback = e => {
    setState(prevState => ({
      ...prevState,
      [e]: prevState[e] + 1,
    }));
  };

  // Функція для підрахунку відсотка позитивних відгуків
  const countTotalFeedback = () => {
    console.log(state.good + state.neutral + state.bad);
    return state.good + state.neutral + state.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    return Math.round((state.good / total) * 100);
  };
  // Оголошуємо масив опцій для кнопок відгуків
  const options = ['good', 'neutral', 'bad'];

  return (
    <div className="App">
      <Section title="Pleace leave your feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleFeedback} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            getTotal={countTotalFeedback()}
            getPositivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Message message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

export default App;
