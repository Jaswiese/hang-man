import { createSlice } from '@reduxjs/toolkit';
// importing images that are used in state changes
import startImg from '../resources/images/start-prompt.png';
import stateOneImg from '../resources/images/state1.gif';
import stateTwoImg from '../resources/images/state2.gif';
import stateThreeImg from '../resources/images/state3.gif';
import stateFourImg from '../resources/images/state4.gif';
import stateFiveImg from '../resources/images/state5.gif';
import stateSixthImg from '../resources/images/state6.gif';
import stateSevenImg from '../resources/images/state7.gif';
import stateEightImg from '../resources/images/state8.gif';
import stateNineImg from '../resources/images/state9.gif';
import stateTenImg from '../resources/images/state10.gif';
import stateElevenImg from '../resources/images/state11.gif';
import stateTwelveImg from '../resources/images/state12.png';
// default state of hangman
/** Each img attribute represents visually a different state of the hangman graphic
 * This state is used as a storage mechanism within the app.
 */
const initialState = [
  { id: 0, img: startImg },
  { id: 1, img: stateOneImg },
  { id: 2, img: stateTwoImg },
  { id: 3, img: stateThreeImg },
  { id: 4, img: stateFourImg },
  { id: 5, img: stateFiveImg },
  { id: 6, img: stateSixthImg },
  { id: 7, img: stateSevenImg },
  { id: 8, img: stateEightImg },
  { id: 9, img: stateNineImg },
  { id: 10, img: stateTenImg },
  { id: 11, img: stateElevenImg },
  { id: 12, img: stateTwelveImg },
];
// hangmanSlice state named hangman and initialState set to the initialState variable above.
export const hangmanSlice = createSlice({
  name: 'hangman',
  initialState,
  reducers: {},
});

export default hangmanSlice.reducer;
