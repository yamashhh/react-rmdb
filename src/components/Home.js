import HeroImage from './HeroImage';
import useHomeFetch from '../hooks/useHomeFetch';
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
import NoImage from '../images/no_image.jpg';

export default function Home() {
  const { state, loading, error } = useHomeFetch();
  const heroImage = state.results[0];

  return (
    <>
      {heroImage && (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
          title={heroImage.original_title}
          text={heroImage.overview}
        />
      )}
    </>
  );
}
