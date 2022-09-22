const reducerMoviesInitialState = {};
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
const API_KEY = "e63d58702d899b95979a46ea0b0bd13b";
const BASE_URL = "https://api.themoviedb.org/3";
//`${BASE_URL}/discover/apikey=${API_KEY}&with_network=213`
export const reducerMovies = createSlice({
  name: "sdfsd",
  API_KEY: "",
  BASE_URL: "",
  reducers: {
    getNetflixOriginal: (state, action) => {},
  },
});
