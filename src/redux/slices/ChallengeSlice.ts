import { createSlice } from '@reduxjs/toolkit';

const challenges_initial_state = {
  list: [],
  challenge: {
    _id: '',
    fromDate: null,
    toDate: null,
    main: {
      story: '',
      content: '',
      scoreBase: null,
    },
    side: {
      story: '',
      content: '',
      scoreBase: null,
    }
  }
}

const ChallengeSlice = createSlice({
  name: 'challenges',
  initialState: challenges_initial_state,
  reducers: {
    
  }
})

export default ChallengeSlice;