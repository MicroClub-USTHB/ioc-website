import { createSlice } from '@reduxjs/toolkit';
import English from '../../common/Lang/english';
import French, { LangType } from '../../common/Lang/french';

interface SliceType {
  language: 'english' | 'french',
  Lang: LangType
}

const initial_state : SliceType = {
  language: (localStorage.getItem('language') as 'english' | 'french') ?? 'english',
  Lang: localStorage.getItem('language') === 'french' ? French : English
}

const common = createSlice({
  name: 'common',
  initialState: initial_state,
  reducers: {
    setLanguage: (state, action: {type: string, payload: boolean}) => {
      const new_lang = action.payload ? 'french' : 'english';
      localStorage.setItem('language', new_lang);
      state.language = new_lang;
      state.Lang = new_lang === 'english' ? English : French;
    }
  }
})

export const { setLanguage } = common.actions;

export default common.reducer;