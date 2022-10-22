import PropTypes from 'prop-types';
import {
  OptionsTitle,
  OptionsItem,
  OptionsList,
  OptionsSpan,
} from './Statistics.styled';

const Statistics = ({
  goodFeedback,
  neutralFeedback,
  badFeedback,
  totalFeedback,
  positiveFeedback,
}) => {
  return (
    <div>
      <OptionsTitle>Statistics</OptionsTitle>
      <OptionsList>
        <OptionsItem>
          Good: <OptionsSpan>{goodFeedback}</OptionsSpan>
        </OptionsItem>
        <OptionsItem>
          Neutral: <OptionsSpan>{neutralFeedback}</OptionsSpan>
        </OptionsItem>
        <OptionsItem>
          Bad: <OptionsSpan>{badFeedback}</OptionsSpan>
        </OptionsItem>
        <OptionsItem>
          Total: <OptionsSpan>{totalFeedback}</OptionsSpan>
        </OptionsItem>
        <OptionsItem>
          Positive feedback: <OptionsSpan>{positiveFeedback}%</OptionsSpan>
        </OptionsItem>
      </OptionsList>
    </div>
  );
};

Statistics.propTypes = {
  goodFeedback: PropTypes.number,
  neutralFeedback: PropTypes.number,
  badFeedback: PropTypes.number,
  totalFeedback: PropTypes.number,
  positiveFeedback: PropTypes.number,
};

export default Statistics;
