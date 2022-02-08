/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
// initialState variable declared
/**
 * gameStart - attribute is used for game phase control (i.e has the user started the game)
 * wordIndex - attribute is used to call a word at the specific index from another slice
 * gamePhase - attribute is used to track how many guesses the user has left.
 */
const initialState = {
  gameStart: false,
  wordIndex: 37,
  gamePhase: 0,
};
/**
 * controlsSlice declared - this slice is used for the 'control' of the game.
 * setWordIndex reducer - used to update the wordIndex attribute of the  controls state.
 * setGameStart reducer - used to update the gameStart attribute of the controls state.
 * resetGame reducer - used to reset the controls state to its default initialState variable.
 * incrementPhase - used to increment gamePhase attribute by 1 as long as the gamePhase is less or equal to 11.
 */
export const controlsSlice = createSlice({
  name: 'controls',
  initialState,
  reducers: {
    setWordIndex: (state, action) => {
      state.wordIndex = action.payload;
    },
    setGameStart: (state, action) => {
      state.gameStart = action.payload;
    },
    resetGame: (state, action) => initialState,
    incrementPhase: (state, action) => {
      if (state.gamePhase <= 11) {
        state.gamePhase += 1;
      }
    },
  },
});
// controlsSlice actions exported
export const {
  setWordIndex,
  setGameStart,
  resetGame,
  incrementPhase,
  incrementWin,
} = controlsSlice.actions;

export default controlsSlice.reducer;
