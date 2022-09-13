import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./comm/like";
import Pagination from "./comm/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./comm/listGroup";
import { getGenres } from "../services/fakeGenreService";
class Movies extends Component {
  state = { movies: [], pageSize: 4, currentPage: 1, genre: [] };

  componentDidMount() {
    this.setState({ movies: getMovies(), genre: getGenres() });
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
    this.setState({ selectedGenre: genre });
  };
  render() {
    const { pageSize, currentPage, movies: allMovies } = this.state;
    const { length: count } = this.state.movies;
    if (count === 0) return "there is no movies to show on the database";
    const movies = paginate(allMovies, currentPage, pageSize);

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
              <span>showing {count} movies in the database.</span>
              <table className="table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    <th>Like</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {movies.map((movie) => (
                    <tr key={movie._id}>
                      <td>{movie.title}</td>
                      <td>{movie.genre.name}</td>
                      <td>{movie.numberInStock}</td>
                      <td>{movie.dailyRentalRate}</td>
                      <td>
                        <Like
                          Liked={movie.Liked}
                          onLiked={() => this.handleLike(movie)}
                        />
                      </td>
                      <td>
                        {" "}
                        <button
                          onClick={() => this.handleDelete(movie)}
                          className="btn btn-danger btn-sm"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Pagination
                itemSize={count}
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
