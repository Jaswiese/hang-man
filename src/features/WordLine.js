/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import dictionary from '../resources/text/dictionary.txt';
// lines array declared used within the getWords AsyncThunk
let lines = [];
/**
 * getWords AsyncThunk declared
 * returns words state and utilises the getWords action
 * an async arrow function is declared
 * fetch is used to access the dictionary text file path
 * first then accesses the response text
 * second then splits the text response on lines using regex which is then assigned to the lines array
 * which is returned as a result (or payload)
 */
export const getWords = createAsyncThunk('words/getWords', async () =>
  fetch(dictionary)
    .then((response) => response.text())
    .then((text) => (lines = text.split('\n')))
);
// wordsLineSLice declared - state named wordLine - initialState contains 2 attributes words array & status boolean.
const wordsLineSlice = createSlice({
  name: 'wordsLine',
  initialState: {
    words: [],
    status: null,
    reducers: {},
  },
  extraReducers: {
    // during the .pending action of the getWords action the status attribute is set to 'loading'
    [getWords.pending]: (state, action) => {
      state.status = 'loading';
    },
    /** .fulfilled
     * status is set to 'success'
     * words is set to the payload i.e the lines array
     */
    [getWords.fulfilled]: (state, action) => {
      state.status = 'success';
      state.words = action.payload;
    },
    // .rejected (if the connection fails) status attribute is set to 'failed'
    [getWords.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export default wordsLineSlice.reducer;
