//kategori verilerini al ve reducer' a haber ver

import { ActionTypes } from "../actionTypes.";
import axios from "axios";
import { options } from "../../constants/index";

export const getGenres = () => (dispatch) => {
  dispatch({ type: ActionTypes.GENRES_LOADİNG });

  axios
    .get("https://api.themoviedb.org/3/genre/movie/list", options)
    .then((res) =>
      dispatch({ type: ActionTypes.GENRES_SUCCESS, payload: res.data.genres })
    )
    .catch((err) =>
      dispatch({
        type: ActionTypes.GENRES_ERROR,
        payload: err.message,
      })
    );
};
