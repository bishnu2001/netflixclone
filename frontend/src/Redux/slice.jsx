import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_KEY, BASE_URL } from "../utils/constant";
import axios from "axios";

const initialState = {
  movies: [],
  genresLoaded: false,
  genres: [],
};
export const getgenres = createAsyncThunk("netflix/genres", async () => {
  const {
    data: { genres },
  } = await axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
  return genres;
});
const cretemoviearrayfromrawdata = (array, moviesarray, genres) => {
  array.forEach((movie) => {
    const movieGenres = [];
    movie.genre_ids.forEach((genre) => {
      const name = genres.find(({ id }) => id === genre);
      if (name) movieGenres.push(name.name);
    });
    if (movie.backdrop_path)
      moviesarray.push({
        id: movie.id,
        name: movie?.original_name ? movie.original_name : movie.original_title,
        image: movie.backdrop_path,
        genres: movieGenres.slice(0, 3),
      });
  });
};
const getrawdata = async (api, genres, paging) => {
  const moviesArray = [];
  for (let i = 1; moviesArray.length < 60 && i < 10; i++) {
    const { data:{ results }}= await axios.get(
      `${api}${paging ? `&page=${i}` : ""}`
    );
    cretemoviearrayfromrawdata(results, moviesArray, genres);
  }
  return moviesArray;
};
export const fetchDataByGenre = createAsyncThunk(
  "netflix/genre",
  async ({ genre,type }, thunkApi) => {
    console.log("in fetch data",genre,type)
    const {
      netflix: { genres },
    } = thunkApi.getState();
    const data= getrawdata(
      `${BASE_URL}/discover/${type}?api_key=${API_KEY}&with_genres=${genre}`,
      genres,
      true
    );
    return data;
  }
);

export const getUsersLikedMovies = createAsyncThunk(
  "netflix/getLiked",
  async (email) => {
    const {
      data: { movies },
    } = await axios.get(`http://localhost:4500/api/user/liked/${email}`);
    return movies;
  }
);
export const removeFromLikedMovies = createAsyncThunk(
  "netflix/deleteLiked",
  async ({email,movieId}) => {
    const {
      data: { movies },
    } = await axios.put(`http://localhost:4500/api/user/delete`);
    return movies;
  }
);
export const fetchmovies = createAsyncThunk(
  "netflix/trending",
  async ({ type }, thunkApi) => {
    const {
      netflix: { genres },
    } = thunkApi.getState();
    return getrawdata(
      `${BASE_URL}/trending/${type}/week?api_key=${API_KEY}`,
      genres,
      true
    );
  }

);

const Netflixslice = createSlice({
  name: "netflix",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getgenres.fulfilled, (state, action) => {
      state.genres = action.payload;
      state.genresLoaded = true;
    });
    builder.addCase(fetchmovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
    builder.addCase(fetchDataByGenre.fulfilled,(state,action)=>{
      state.movies = action.payload;
    });
    builder.addCase(getUsersLikedMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
      builder.addCase(removeFromLikedMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
      });
  },
});
export default Netflixslice.reducer;
