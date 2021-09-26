import { Wrapper } from './Button.styles';
// import PropTypes from 'prop-types';

export default function Button({
  text,
  callback,
}: {
  text: string;
  callback: () => void;
}) {
  return (
    <Wrapper type="button" onClick={callback}>
      {text}
    </Wrapper>
  );
}

// Button.propTypes = {
//   text: PropTypes.string,
//   callback: PropTypes.func,
// };
