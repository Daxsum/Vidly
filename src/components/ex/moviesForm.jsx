import React from "react";
const MoviesForm = ({ match, history }) => {
  return (
    <div>
      <h1>movies/{match.params.id}</h1>
      <button
        className="btn btn-danger btn-sm"
        onClick={() => {
          history.push("/movies");
        }}
      >
        save
      </button>
    </div>
  );
};

export default MoviesForm;
