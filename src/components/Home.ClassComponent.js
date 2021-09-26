import { Component } from 'react';
import HeroImage from './HeroImage';
import SearchBar from './SearchBar';
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner from './Spinner';
import Button from './Button';
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
import NoImage from '../images/no_image.jpg';
import API from '../API';

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export class Home extends Component {
  state = {
    movies: initialState,
    searchTerm: '',
    isLoadingMore: false,
    loading: false,
    error: false,
  };

  async fetchMovies(page, searchTerm = '') {
    this.setState({ error: false, loading: true });
    try {
      const movies = await API.fetchMovies(searchTerm, page);
      this.setState((prev) => ({
        ...prev,
        movies: {
          ...movies,
          results:
            page > 1
              ? [...prev.movies.results, ...movies.results]
              : [...movies.results],
        },
      }));
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
  }

  handleSearch(searchTerm) {
    this.setState({ movies: initialState, searchTerm }, () => {
      this.fetchMovies(1, this.state.searchTerm);
    });
  }

  handleLoadMore() {
    this.fetchMovies(this.state.movies.page + 1, this.state.searchTerm);
  }

  componentDidMount() {
    this.fetchMovies(1);
  }

  render() {
    const { searchTerm, movies, loading, error } = this.state;

    if (error) return <div>Something went wrong...</div>;

    const results = movies.results;
    const heroImage = movies.results[0];

    return (
      <>
        {!searchTerm && heroImage && (
          <HeroImage
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
            title={heroImage.original_title}
            text={heroImage.overview}
          />
        )}
        <SearchBar setSearchTerm={this.handleSearch} />
        <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
          {results.map((movie) => (
            <Thumb
              key={movie.id}
              clickable
              image={
                movie.poster_path
                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                  : NoImage
              }
              movieId={movie.id}
            />
          ))}
        </Grid>
        {loading && <Spinner />}
        {movies.page < movies.total_pages && !loading && (
          <Button text="Load More" callback={this.handleLoadMore} />
        )}
      </>
    );
  }
}
