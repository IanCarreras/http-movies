import React, { useState } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import UpdateMovie from './Movies/UpdateMovie'

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movie, setMovie] = useState({})

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie 
                  {...props} 
                  addToSavedList={addToSavedList}
                  setMovie={setMovie} />;
        }}
      />
      <Route 
        exact path="/update-movie/:id"
        render={props => {
          return <UpdateMovie 
                    {...props}
                    movie={movie}
                    setMovie={setMovie}  />
        }}
        />
    </>
  );
};

export default App;
