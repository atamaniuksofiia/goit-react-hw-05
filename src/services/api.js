import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTZlYzM0ZGYwMTA2NDYzZDA0MzRkZmQ5ZjQ1ODllYSIsIm5iZiI6MTczMjcwODE4OC42OTYyNjQzLCJzdWIiOiI2NzQ2ZmY0NGQ3YTIwNTcxNWI2MTY2YWUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.M0rrw1KlF8Wfd69idzZ46dxM63zzXoFPKYebNqnNVng";

const API_KEY = "8e6ec34df0106463d0434dfd9f4589ea";

axios.defaults.headers.common["Authorization"] = `Bearer ${API_TOKEN}`;

export const fetchTrendingMovie = async (time_window = "day") => {
  try {
    const { data } = await axios.get(`/trending/movie/${time_window}`, {
      params: { api_key: API_KEY },
    });
    return data.results;
  } catch (err) {
    console.error("Error fetching trending movies:", err.message);
    throw err;
  }
};

export const fetchSearchMovie = async (query) => {
  try {
    const { data } = await axios.get(`/search/movie`, {
      params: { query, api_key: API_KEY },
    });
    return data.results;
  } catch (err) {
    console.error("Error fetching search movies:", err.message);
    throw err;
  }
};

export const fetchMovieDetails = async (id) => {
  try {
    const { data } = await axios.get(`/movie/${id}`, {
      params: { api_key: API_KEY },
    });
    return data;
  } catch (err) {
    console.error("Error fetching movie details:", err.message);
    throw err;
  }
};

export const fetchMovieCredits = async (id) => {
  try {
    const { data } = await axios.get(`/movie/${id}/credits`, {
      params: { api_key: API_KEY },
    });
    return data.cast;
  } catch (err) {
    console.error("Error fetching movie credits:", err.message);
    throw err;
  }
};

export const fetchMovieReviews = async (id) => {
  try {
    const { data } = await axios.get(`/movie/${id}/reviews`, {
      params: { api_key: API_KEY },
    });
    return data.results;
  } catch (err) {
    console.error("Error fetching movie reviews:", err.message);
    throw err;
  }
};
