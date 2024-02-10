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

  // Функція для відображення кількості відгуків кожної категорії
  // renderFeedback = () => {
  //   return (
  //     <div>
  //       <h2>Statistics:</h2>
  //       <p>Good: {this.state.good}</p>
  //       <p>Neutral: {this.state.neutral}</p>
  //       <p>Bad: {this.state.bad}</p>
  //       <p>Total: {this.countTotalFeedback()}</p>
  //       <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
  //     </div>
  //   );
  // };

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
    //   <div className="App">
    //     <h1>Pleace leave feedback</h1>
    //     <button onClick={() => this.handleFeedback('good')}>Good</button>
    //     <button onClick={() => this.handleFeedback('neutral')}>Neutral</button>
    //     <button onClick={() => this.handleFeedback('bad')}>Bad</button>
    //     {this.renderFeedback()}
    //   </div>
    // );
  }
}
