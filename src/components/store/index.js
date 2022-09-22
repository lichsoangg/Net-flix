import {configureStore} from "@reduxjs/toolkit";
import {reducerMovies} from "./reducers/reducerMovies";
const store = configureStore({
  reducer: {
    infoMovies: reducerMovies,
  },
});
export default store;
