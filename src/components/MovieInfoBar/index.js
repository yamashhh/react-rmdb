import { calcTime, convertMoney } from '../../helpers';
import { Wrapper, Content } from './MovieInfoBar.styles';
import PropTypes from 'prop-types';

export default function MovieInfoBar({ time, budget, revenue }) {
  return (
    <Wrapper>
      <Content>
        <div className="column">
          <p>Running Time: {calcTime(time)}</p>
        </div>
        <div className="column">
          <p>Budget: {convertMoney(budget)}</p>
        </div>
        <div className="column">
          <p>Revenue: {convertMoney(revenue)}</p>
        </div>
      </Content>
    </Wrapper>
  );
}

MovieInfoBar.propTypes = {
  time: PropTypes.number,
  budge: PropTypes.number,
  revenue: PropTypes.number,
};
