import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    user_sign_in: (state, action) => {
      const { payload: _id } = action;
      state.user = { id: _id };
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    publisher_sign_in: (state, action) => {
      const { payload: _id } = action;
      state.user = { id: _id };
      localStorage.setItem("publisher", JSON.stringify(state.user));
    },
    user_sign_out: (state, action) => {
      state.user = {};
      localStorage.removeItem("user");
    },
    publisher_sign_out: (state, action) => {
      state.user = {};
      localStorage.removeItem("publisher");
    },
  },
});

export const { publisher_sign_in,  user_sign_in, publisher_sign_out, user_sign_out } = usersSlice.actions;
export default usersSlice.reducer;
