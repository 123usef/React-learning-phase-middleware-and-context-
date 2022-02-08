import axios from "axios";
export const getmovieslist = () => (dispatch) => {
  return axios
    .get(
      "https://api.themoviedb.org/3/movie/popular?api_key=0714847f29bce4a8cecaafb483252205"
    )
    .then((res) =>
      dispatch({
        type: "GET_MOVIES_LIST",
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};
