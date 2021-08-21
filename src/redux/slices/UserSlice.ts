import { createSlice } from "@reduxjs/toolkit";
import { UserData } from "../types";

const user_init: UserData = {
  token: '',
  user: {
    _id: '',
    score: 0,
    email: '',
    name: '',
    challenges: []
  }
}

const userSlice = createSlice({
  name: 'user',
  initialState: user_init,
  reducers: {
    changeScore: (state, action) => {
      (state as UserData).user.score = action.payload;
    }
  }
})

export default userSlice.reducer;