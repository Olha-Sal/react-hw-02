import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Section } from './Section/Section';
import { Message } from './Message/Message';

export class App extends Component {
  // Оголошуємо стан застосунку з трьома властивостями: good, neutral і bad
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // Функція для збільшення кількості відгуків відповідної категорії
  handleFeedback = e => {
    console.log(e);
    this.setState(prevState => ({
      ...prevState,
      [e]: prevState[e] + 1,
    }));
  };

  // Функція для підрахунку відсотка позитивних відгуків
  countTotalFeedback = () => {
    // console.log(this.state.good + this.state.neutral + this.state.bad);
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    return Math.round((this.state.good / total) * 100);
  };

  render() {
    // Оголошуємо масив опцій для кнопок відгуків
    const options = ['good', 'neutral', 'bad'];

    return (
      <div className="App">
        <Section title="Pleace leave your feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              getTotal={this.countTotalFeedback}
              getPositivePercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Message message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
