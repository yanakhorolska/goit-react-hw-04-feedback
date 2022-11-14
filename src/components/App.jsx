import { useState } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './NotificationMessage';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countPositiveFeedbackPercentage = () => {
    return Math.round(good / (totalCount() / 100));
  };
  const onLeaveFeedback = event => {
    switch (event.target.dataset.action) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        break;
    }
  };
  const totalCount = () => {
    return good + bad + neutral;
  };
  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
        {totalCount() > 0 ? (
          <Statistics
            goodFeedback={good}
            neutralFeedback={neutral}
            badFeedback={bad}
            totalFeedback={totalCount()}
            positiveFeedback={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </div>
  );
};
export default App;
