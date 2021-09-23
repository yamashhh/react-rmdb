import { useState, useEffect } from 'react';
import API from '../API';
import { getPersistedState } from '../helpers';

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export default function useHomeFetch() {
  const [state, setState] = useState(initialState);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function fetchMovies(page, searchTerm = '') {
    setError(false);
    setLoading(true);
    try {
      const movies = await API.fetchMovies(searchTerm, page);
      setState((prev) => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  // NOTE:
  // useEffect for initial render
  // & fetching results related to searchTerm
  useEffect(() => {
    if (!searchTerm) {
      const sessionState = getPersistedState('homeState');
      if (sessionState) return setState(sessionState);
    }
    setState(initialState);
    fetchMovies(1, searchTerm);
  }, [searchTerm]);

  // NOTE:
  // useEffect for loading more pages
  useEffect(() => {
    if (!isLoadingMore) return;
    fetchMovies(state.page + 1, searchTerm);
    setIsLoadingMore(false);
  }, [isLoadingMore, state.page, searchTerm]);

  // NOTE:
  // write to sessionStorage
  useEffect(() => {
    if (!searchTerm) sessionStorage.setItem('homeState', JSON.stringify(state));
  }, [searchTerm, state]);

  console.dir(state);

  return { state, searchTerm, setSearchTerm, setIsLoadingMore, loading, error };
}
