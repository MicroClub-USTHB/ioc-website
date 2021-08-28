import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';

interface SliceType {
  language: 'english' | 'french'
}

const initial_state : SliceType = {
  language: (localStorage.getItem('language') as 'english' | 'french') ?? 'english',
}

const common = createSlice({
  name: 'common',
  initialState: initial_state,
  reducers: {
    setLanguage: (state, action: {type: string, payload: boolean}) => {
      const new_lang = action.payload ? 'french' : 'english';
      localStorage.setItem('language', new_lang);
      state.language = new_lang;
    }
  }
})

export const { setLanguage } = common.actions;

export default common.reducer;