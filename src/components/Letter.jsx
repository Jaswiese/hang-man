import React from 'react';
// propTypes imported for prop type validation
import PropTypes from 'prop-types';
// redux hooks imported
import { useDispatch, useSelector } from 'react-redux';
// actions imported from slices
import { setLetterSelected } from '../features/Letters';
import { incrementPhase } from '../features/Controls';
// Letter component displays the individual letter buttons three props have been passed - letter, selected & contains
function Letter({ letter, selected, contains }) {
  // dispatch variable assigned the useDispatch hook as its value.
  const dispatch = useDispatch();
  // gameStatus variable assigned the value of the controls state, gameStart attribute
  const gameStatus = useSelector((state) => state.controls.gameStart);
  // gamePhase variable assigned the value of the controls state gamePhase attribute
  const gamePhase = useSelector((state) => state.controls.gamePhase);
  /**
   * selectLetter function
   * this function is used to update appropriate state when the corresponding letter is clicked by the user.
   * it takes a char as parameter
   */
  function selectLetter(char) {
    // condtional if the game has started and is less or equal to the 11th guess of the user.
    if (gameStatus && gamePhase <= 11) {
      // if the word contains the letter being selected the setLetterSelected action is fired with the char as payload.
      if (contains) {
        dispatch(setLetterSelected(char));
        // else the incrementPhase action is fired (user lost one guess) and the setLetterSelected action is fired with char as payload.
      } else {
        dispatch(incrementPhase());
        dispatch(setLetterSelected(char));
      }
      // if the game has not started and the user clicked on a letter button, the user is prompted to start the game.
    } else {
      alert(
        'You have not started the game, click the start button to begin the game.'
      );
    }
  }
  /**
   * displayLetterBtn function is used to display changes in state to the user in the UI (individual buttons)
   * className variable is set to the default styling class for the letter buttons
   * if selected (prop) and contains (prop) is true, the appropriate class is appended to show a correct choice by the user
   * if selected (prop) but does not contain (prop), a class is appended to show the incorrect choice by the user.
   * the className is then returned as a result of the function.
   */
  function displayLetterBtn() {
    let className = ' letter-control-btn';
    if (selected && contains) {
      className += ' letter-selected-correct';
    } else if (selected && !contains) {
      className += ' letter-selected-incorrect';
    }
    return className;
  }
  /**
   * the Letter component return (ui render)
   * contains a single button
   * in the className attribute the displayLetterBtn is called
   * the onClick event fires the selectLetter function with the letter prop as param
   * see app.css for styling (classes)
   */
  return (
    <button
      type="button"
      className={displayLetterBtn()}
      onClick={() => {
        selectLetter(letter);
      }}
    >
      <p className="control-letter">{letter}</p>
    </button>
  );
}
// PropTypes type validation check
Letter.propTypes = {
  letter: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  contains: PropTypes.bool.isRequired,
};

export default Letter;
