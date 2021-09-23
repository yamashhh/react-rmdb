import { Wrapper, Content } from './BreadCrumb.styles';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function BreadCrumb({ movieTitle }) {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <span>Home</span>
        </Link>
        <span>|</span>
        <span>{movieTitle}</span>
      </Content>
    </Wrapper>
  );
}

BreadCrumb.propTypes = {
  movieTitle: PropTypes.string,
};
