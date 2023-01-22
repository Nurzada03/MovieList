import React, { useState } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,

      title: "Avatar 1",

      rating: 4,

      img: "https://image.cnbcfm.com/api/v1/image/105897632-1557241558937avatar-e1541360922907.jpg?v=1664130328&w=1920&h=1080",
    },

    {
      id: 2,

      title: "Kunfu panda",

      rating: 5,

      img: "https://m.media-amazon.com/images/M/MV5BODJkZTZhMWItMDI3Yy00ZWZlLTk4NjQtOTI1ZjU5NjBjZTVjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
    },

    {
      id: 3,

      title: "Naruto",
      Shipuden: "bn",

      rating: 5,

      img: "https://cdn.europosters.eu/image/1300/posters/naruto-shippuden-i84239.jpg",
    },

    {
      id: 4,

      title: "Hobbit",

      rating: 5,

      img: "https://m.media-amazon.com/images/M/MV5BMTcwNTE4MTUxMl5BMl5BanBnXkFtZTcwMDIyODM4OA@@._V1_FMjpg_UX1000_.jpg",
    },
  ]);

  const addNewMovieItem = (data) => {
    console.log(data);
    const upItems = [...movies];
    upItems.push(data);
    setMovies(upItems);
  };

  function deleteTodo(id) {
    let newToDo = [...movies].filter((item) => item.id !== id);

    setMovies(newToDo);
  }

  return (
    <>
      <Header onSaveMovieItem={addNewMovieItem} />
      <MainContent movies={movies} deleteTodo={deleteTodo} />
    </>
  );
}

export default App;
