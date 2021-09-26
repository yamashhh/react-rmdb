import { Image } from './Thumb.styles';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

export default function Thumb({
  image,
  movieId,
  clickable,
}: {
  image: string;
  movieId?: number;
  clickable: boolean;
}) {
  return (
    <div>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <Image src={image} alt="movie-thumb" />
        </Link>
      ) : (
        <Image src={image} alt="movie-thumb" />
      )}
    </div>
  );
}

// Thumb.propTypes = {
//   image: PropTypes.string,
//   movieId: PropTypes.number,
//   clickable: PropTypes.bool,
// };
