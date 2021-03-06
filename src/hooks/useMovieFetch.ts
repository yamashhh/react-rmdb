import { useState, useEffect } from 'react';
import API, { Movie, Cast, Crew } from '../API';
import { getPersistedState } from '../helpers';

export type MovieState = Movie & {
  actors: Cast[];
  directors: Crew[];
};

export default function useMovieFetch(movieId: string) {
  const [state, setState] = useState<MovieState>({} as MovieState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMovie() {
      try {
        setLoading(true);
        setError(false);
        const movie = await API.fetchMovie(movieId);
        const credits = await API.fetchCredits(movieId);
        const directors = credits.crew.filter(
          (member) => member.job === 'Director',
        );
        setState({
          ...movie,
          actors: credits.cast,
          directors,
        });
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    const sessionState = getPersistedState(movieId.toString());
    if (sessionState) {
      setState(sessionState);
      setLoading(false);
      return;
    }

    fetchMovie();
  }, [movieId]);

  // NOTE:
  // write to sessionStorage
  useEffect(() => {
    sessionStorage.setItem(movieId.toString(), JSON.stringify(state));
  }, [movieId, state]);

  return { state, loading, error };
}
