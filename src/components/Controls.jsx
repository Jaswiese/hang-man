import React from 'react';
// importing bootstrap components
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// importing redux hooks
import { useSelector, useDispatch } from 'react-redux';
// importing Controls actions
import {
  setWordIndex,
  setGameStart,
  incrementPhase,
  resetGame,
} from '../features/Controls';
// importing reset actions from state slices
import { resetLettersChoice } from '../features/Letters';
import { resetTargetWord } from '../features/Word';
/**
 * Controls component - displays two buttons used for game control
 */
function Controls() {
  // useDispatch hook declared as dispatch
  const dispatch = useDispatch();
  // useSelector hook used to retrieve the controls state and assigned as controlsStore.
  const controlsStore = useSelector((state) => state.controls);
  /**
   * randomWordIndex function
   * used to return a random index value within the dictionary entry range.
   * min and max variables declared, using the min and maximum range of the dictionary
   * selectedIndex variable assigned the result of the Math.random method using the min max variables
   * the selectedIndex is then returned as a result of the call
   */
  function randomWordIndex() {
    const min = 38;
    const max = 77472;
    const selectedIndex = Math.floor(Math.random() * (max - min) + min);
    return selectedIndex;
  }
  /**
   * gameStart function
   * fired when the user clicks the start button.
   * wordIndex variable declared and assigned the result of the randomWordIndex function
   * conditional checks if the game has started. if true,
   * dispatches three actions;
   * setWordIndex with the wordIndex variable as payload
   * setGameStart with a true boolean as payload
   * incrementPhase action. (incrementing the gamePhase by 1)
   * if false,
   * alerts the user that they need to click the start button.
   */
  function gameStart() {
    const wordIndex = randomWordIndex();
    if (!controlsStore.gameStart) {
      dispatch(setWordIndex(wordIndex));
      dispatch(setGameStart(true));
      dispatch(incrementPhase());
    } else {
      alert(
        'Game has already started - if you want to restart, press the reset button.'
      );
    }
  }
  /**
   * gameReset function
   * fired when the user clicks the reset button
   * conditional checks is the game has started if true,
   * dispatches three actions;
   * resetGame - resets the controls state
   * resetLettersChoice - resets the Letters state
   * resetTargetWord - resets the wordState
   * else,
   * alerts the user they need to have started the game before they can reset it.
   */
  function gameReset() {
    if (controlsStore.gameStart) {
      dispatch(resetGame());
      dispatch(resetLettersChoice());
      dispatch(resetTargetWord());
    } else {
      alert('Cant reset the game if you have not started it yet.');
    }
  }
  /**
   * controls component return
   * bootstrap components used for layout
   * custom classes used for UI logic - found in the app.css
   * both buttons contain an onClick event
   * start - fires the gameStart function
   * reset - fires the gameReset function
   */
  return (
    <Container fluid className="pt-5">
      <Row className="justify-content-center">
        <Col className="col-md-6 text-center">
          <button
            id="start-button"
            className="btn btn-primary game-control"
            type="button"
            onClick={() => {
              gameStart();
            }}
          >
            {' '}
            Start{' '}
          </button>
          <button
            id="reset-button"
            className="btn btn-primary game-control"
            type="button"
            onClick={() => {
              gameReset();
            }}
          >
            Reset{' '}
          </button>
        </Col>
      </Row>
    </Container>
  );
}

export default Controls;
