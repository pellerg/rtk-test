import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const backendURL = "https://devapi.maxwhere.com";

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `${backendURL}/auth/login`,
        { email, password },
        config
      );

      // store user's token in local storage
      localStorage.setItem("access_token", data.access_token);
      console.log("Login successful");

      return data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const refreshJWTToken = createAsyncThunk(
  "auth/refresh",
  async (refresh_token, { rejectWithValue }) => {
    try {
      // configure headers
      const config = {
        headers: {
          Authorization: `Bearer ${refresh_token}`,
        },
      };

      const { data } = await axios.get(`${backendURL}/auth/refresh`, config);
      // store user's token in local storage
      localStorage.setItem("access_token", data.access_token);

      return data;
    } catch (error) {
      console.log("refreshJWTToken error van:");
      console.log(error);
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
