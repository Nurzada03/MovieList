import React from "react";
import MovieList from "./MovieList";

const MainContent = ({ movies, deleteTodo }) => {
  return (
    <>
      {movies.map((elem) => (
        <MovieList key={elem.id} {...elem} deleteTodo={deleteTodo} />
      ))}
    </>
  );
};

export default MainContent;
