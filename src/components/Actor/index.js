import { Wrapper, Image } from './Actor.styles';
import PropTypes from 'prop-types';

export default function Actor({ name, character, imageUrl }) {
  return (
    <Wrapper>
      <Image src={imageUrl} alt="actor-thumb" />
      <h3>{name}</h3>
      <p>{character}</p>
    </Wrapper>
  );
}

Actor.propTypes = {
  name: PropTypes.string,
  character: PropTypes.string,
  imageUrl: PropTypes.string,
};
