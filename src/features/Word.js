/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
// initialState variable declared with the wordCharArray as an attribute
const initialState = [
  {
    wordCharArray: [],
  },
];
// wordSlice delcared - state name set to word, intialState set to the variable of the same name above.
const wordSlice = createSlice({
  name: 'word',
  initialState,
  reducers: {
    /**
     * storeTargetWord action adds the action's payload to the wordCharArray
     */
    storeTargetWord: (state, action) => {
      state[0].wordCharArray.push(action.payload);
    },
    /**
     * filterTargetArr actions - ultimately used for the win condition
     * updatedArr variable set to the array return from the filter method
     * the first filter method returns all the characters that is not equal to the payload
     * the second filter method returns all the characters that is not equal to the payload in lowerCase.
     * the array at wordCharArray index 3 is then set to the updatedArr.
     */
    filterTargetArr: (state, action) => {
      let updatedArr = state[0].wordCharArray[3].filter(
        (el) => el !== action.payload
      );
      updatedArr = updatedArr.filter(
        (el) => el !== action.payload.toLowerCase()
      );
      state[0].wordCharArray[3] = updatedArr;
    },
    // resetTargetWord - used to reset the the word state to the default state - initialState variable above.
    resetTargetWord: () => initialState,
  },
});
// wordSlice actions exported
export const {
  storeTargetWord,
  resetTargetWord,
  storeDomTrack,
  filterTargetArr,
} = wordSlice.actions;

export default wordSlice.reducer;
