/* eslint-disable consistent-return */
/* eslint-disable no-else-return */
import { React } from 'react';
// proptypes imported for prop validation checks
import PropTypes from 'prop-types';
// redux hooks imported
import { useDispatch, useSelector } from 'react-redux';
// actions imported from the lettersSlice
import { setLetterContains, setLetterBoth } from '../features/Letters';
// actions imported from the wordSlice
import { filterTargetArr } from '../features/Word';
// WordCharacter component used to display each individual letter on the wordLine (receives char as prop)
function WordCharacter({ char }) {
  // dispatch variable assigned useDispatch hook as value.
  const dispatch = useDispatch();
  // letterSelected assigned the value of the letters state at index 0, attribute of Letters (array of objects)
  const letterSelected = useSelector((state) => state.letters[0].Letters);
  // gameStatus assigned the value of the controls states' attribute of gameStart value.
  const gameStatus = useSelector((state) => state.controls.gameStart);
  // check if the game has started - dispatches the setLetterContains action with char as its param
  if (gameStatus) {
    dispatch(setLetterContains(char));
  }
  /*
  // edge case for '-' character, checks is the char is '-'
  if (char === '-') {
    // if so dispatches the filterTargetArr with char param
    dispatch(filterTargetArr(char));
    // the char is also then returned
    return char;
  } */

  // letterDisplay function - used to control state logic and display the char - takes on param letterChar
  function letterDisplay(letterChar) {
    // edge case for '-' character, checks is the char is '-'
    if (char === '-') {
      // if so dispatches the filterTargetArr with char param
      dispatch(filterTargetArr(char));
      // the char is also then returned
      return char;
    }
    // for loop used to iterate over each letter in letters state
    for (let i = 0; i < letterSelected.length; i += 1) {
      // each  letter object is assigned to the letterobj variable on each iteration
      const letterObj = letterSelected[i];
      // the letterObj is then deconstructed into its attributes as variables.
      const { letter } = letterObj;
      const { selected } = letterObj;
      const { contains } = letterObj;
      const { both } = letterObj;
      // checks if the param passed in (uppercase) matches the letter attribute value
      if (letter === letterChar.toUpperCase()) {
        // if true, checks if the objs selected and contains attributes are true
        if (selected && contains) {
          // if the obj's both is false, two dispatch hooks are used
          if (!both) {
            // setLetterBoth is fired with the char (prop) as its payload
            dispatch(setLetterBoth(char));
            // filterTargetArr is fired with the char (prop) as its payload
            dispatch(filterTargetArr(char));
          }
          // the char is then returned
          return char;
          // if the letterObj selected attribute is false and the contains attribute is true a blank space is returned.
        } else if (!selected && contains) {
          return '';
        }
      }
    }
  }
  /**
   * WordCharacter return render
   * contains a div with layout styling
   * and a paragraph tag with a inline if statement to determine its text
   * if the game has started the letterDisplay function is called with char as its param to determine the text
   * if not, an 'X' is returned as its text.
   */
  return (
    <div className="word-char-con col-md-auto">
      <p className="word-char">{gameStatus ? letterDisplay(char) : 'X'}</p>
    </div>
  );
}
// PropType validation is done for the char prop
WordCharacter.propTypes = {
  char: PropTypes.string.isRequired,
};

export default WordCharacter;
