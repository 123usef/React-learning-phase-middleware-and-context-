import { combineReducers } from "redux";
import langred from "./langred";
import favitems from "./Favourite";
import moviesReducer from "./getMoivies";

export default combineReducers({
  favourites: favitems,
  language: langred,
  movies: moviesReducer,
});
