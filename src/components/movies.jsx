import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import MoviesList from "./moviesList";
import Pagination from "./comm/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./comm/listGroup";
import { getGenres } from "../services/fakeGenreService";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    genre: [],
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const genre = [{ _id: "", name: "All Movies" }, ...getGenres()];
    this.setState({ movies: getMovies(), genre });
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };
  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].Liked = !movies[index].Liked;
    this.setState({ movies });
  };
  handleChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelection = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };
  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };
  render() {
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      selectedGenre,
      sortColumn,
    } = this.state;
    const { length: count } = this.state.movies;
    if (count === 0) return "there is no movies to show on the database";
    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const movies = paginate(sorted, currentPage, pageSize);

    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <ListGroup
                items={this.state.genre}
                genreOnSelect={this.handleGenreSelection}
                selectedItem={this.state.selectedGenre}
              />
            </div>
            <div className="col-8">
              <span>showing {filtered.length} movies in the database.</span>
              <MoviesList
                movies={movies}
                onDelete={this.handleDelete}
                onLike={this.handleLike}
                onSort={this.handleSort}
                sortColumn={sortColumn}
              />
              <Pagination
                itemSize={filtered.length}
                pageSize={pageSize}
                pageOnChange={this.handleChange}
                currentPage={currentPage}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
