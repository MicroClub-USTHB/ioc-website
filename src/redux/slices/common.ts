import { createSlice } from '@reduxjs/toolkit';

const common = createSlice({
  name: 'common',
  initialState: {
    token: ''
  },
  reducers: {
    setToken: (state, action) => {
      state = action.payload;
    }
  }
})

export default common.reducer;