/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
/**
 * initialState variable declared
 * in the Letters attribute (array of objects) each letter in the alphabet has a corresponding object
 * each object consists of 4 attributes
 * letter - containing the alphabetic letter
 * selected - boolean value toggled to indicate if the user has selected the specific letter
 * contains - boolean value toggled to indicate if the letter is contained within the wordline word the user is guessing
 * both - boolean value toggled to indicate if the letter has been selected and contains the letter
 * gameStart - boolean value to track phase of the game. (redundant in some aspects due to duplicate state).
 */

const initialState = [
  {
    Letters: [
      { letter: 'A', selected: false, contains: false, both: false },
      { letter: 'B', selected: false, contains: false, both: false },
      { letter: 'C', selected: false, contains: false, both: false },
      { letter: 'D', selected: false, contains: false, both: false },
      { letter: 'E', selected: false, contains: false, both: false },
      { letter: 'F', selected: false, contains: false, both: false },
      { letter: 'G', selected: false, contains: false, both: false },
      { letter: 'H', selected: false, contains: false, both: false },
      { letter: 'I', selected: false, contains: false, both: false },
      { letter: 'J', selected: false, contains: false, both: false },
      { letter: 'K', selected: false, contains: false, both: false },
      { letter: 'L', selected: false, contains: false, both: false },
      { letter: 'M', selected: false, contains: false, both: false },
      { letter: 'N', selected: false, contains: false, both: false },
      { letter: 'O', selected: false, contains: false, both: false },
      { letter: 'P', selected: false, contains: false, both: false },
      { letter: 'Q', selected: false, contains: false, both: false },
      { letter: 'R', selected: false, contains: false, both: false },
      { letter: 'S', selected: false, contains: false, both: false },
      { letter: 'T', selected: false, contains: false, both: false },
      { letter: 'U', selected: false, contains: false, both: false },
      { letter: 'V', selected: false, contains: false, both: false },
      { letter: 'W', selected: false, contains: false, both: false },
      { letter: 'Y', selected: false, contains: false, both: false },
      { letter: 'X', selected: false, contains: false, both: false },
      { letter: 'Z', selected: false, contains: false, both: false },
    ],
    gameStart: false,
  },
];
/**
 * lettersSlice delcared
 * state named 'letters'
 * initial state set to initialState variable above
 * reducers:
 */
export const lettersSlice = createSlice({
  name: 'letters',
  initialState,
  reducers: {
    /**
     * setLetterContains reducer
     * iterates over each letter object with a for loop
     * on each loop assigns the current objs letter to the letterTarget variable
     * conditional - checks if the letterTarget is equal to the action.payload (uppercase)
     * if true the current letter objects contains attribute is toggled to true.
     */
    setLetterContains: (state, action) => {
      for (let i = 0; i < state[0].Letters.length; i += 1) {
        const letterTarget = state[0].Letters[i].letter;
        if (letterTarget === action.payload.toUpperCase()) {
          state[0].Letters[i].contains = true;
        }
      }
    },
    // setLetterSelected reducer - utilises the same logic as the setLetterContains reducer, however toggles the letter objects selected attribute to true
    setLetterSelected: (state, action) => {
      for (let i = 0; i < state[0].Letters.length; i += 1) {
        const letterTarget = state[0].Letters[i].letter;
        if (letterTarget === action.payload.toUpperCase()) {
          state[0].Letters[i].selected = true;
        }
      }
    },
    // resetLettersChoice - resets the initialState to its default state - see initialState variable above.
    resetLettersChoice: (state, action) => initialState,
    // setLetterBoth - uses the same logic as the other set reducers, but toggles the both attribute to true.
    setLetterBoth: (state, action) => {
      for (let i = 0; i < state[0].Letters.length; i += 1) {
        const letterTarget = state[0].Letters[i].letter;
        if (letterTarget === action.payload.toUpperCase()) {
          const { contains } = state[0].Letters[i];
          const { selected } = state[0].Letters[i];
          if (selected && contains) {
            state[0].Letters[i].both = true;
          }
        }
      }
    },
  },
});
// exporting the lettersSlice actions
export const {
  setLetterContains,
  setLetterSelected,
  resetLettersChoice,
  setLetterBoth,
} = lettersSlice.actions;

export default lettersSlice.reducer;
