import axios from "axios";
import { setLogin, userLoginFailed } from "../features/userSlice/authSlice";

export const register = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios
      .post("http://localhost:3001/auth/register", formData, config)
      .catch((error) => {
        console.log(error.message);
      });
  } catch (error) {
    console.log(error.message);
  }
};

export const login = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios
      .post("http://localhost:3001/auth/login", formData, config)
      .catch((err) => {
        dispatch(userLoginFailed({ data: err.response.data.error }));
      });
    if (data) {
      localStorage.setItem("UserInfo", JSON.stringify(data));
      dispatch(setLogin({ data: data }));
    }
  } catch (error) {
    console.log(error.message);
  }
};

