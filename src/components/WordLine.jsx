/* eslint-disable no-return-assign */
import React, { useEffect } from 'react';
// importing redux hooks and reducers
import { useSelector, useDispatch } from 'react-redux';
// import bootstrap components
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
// redux reducer import
import { getWords } from '../features/WordLine';
// redux slice actions import from wordSlice
import { storeTargetWord } from '../features/Word';
// importing child component
import WordCharacter from './WordCharacter';
/**
 * WordLine component
 * This component is used to control the display of the 'word line' - where the user will see the word they are trying to guess
 * as well as messages regarding a victory or loss in the game.
 */
function WordLine() {
  // dispatch is assigned the useDispatch hook as its value.
  const dispatch = useDispatch();
  // words is assigned the wordLine states words' attribute as its value
  const words = useSelector((state) => state.wordLine.words);
  // wordIndex is assigned the controls states' attribute wordIndex as its value
  const wordIndex = useSelector((state) => state.controls.wordIndex);
  // gamePhase is assigned the controls state's attribute gamePhase as its value
  const gamePhase = useSelector((state) => state.controls.gamePhase);
  // wordTrackArr is assigned the word state index 0's wordCharArray at index 3 as its value (used for consistency).
  const wordTrackArr = useSelector((state) => state.word[0].wordCharArray[3]);
  // useEffect hook is used on the getWords action, as to render with the state change of the AsyncThunk
  useEffect(() => {
    dispatch(getWords());
  }, [dispatch]);
  // status is assigned the value of the wordLine states attribute status
  const status = useSelector((state) => state.wordLine.status);
  /**
   * display function with param of stageOfLoading
   * this function is the primary logic for the word line display component and reacts to stages in the AsyncThunk (i.e,
   * waits for the data to be retrieved from the dictionary.txt file.)
   */
  function display(stageOfLoading) {
    // if the status of the wordLine state is either undefined or loading this logic executes
    if (stageOfLoading === undefined || stageOfLoading === 'loading') {
      // bootstrap spinner component is returned
      return (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      );
    }
    // if the status is success and the user has not yet exhausted their guess this  logic executes
    if (stageOfLoading === 'success' && gamePhase < 12) {
      // word variable is assigned the value of the string at the index of wordIndex in the words array (see useSelector variable above)
      const word = words[wordIndex];
      // the word array is then split and the returned array of characters is assigned to the arrayOfChars variable
      const arrayOfChars = word.split('');
      // a key variable is intialised with a value of 0
      let key = 0;
      // the storeTargetWord action is fired with the arrayOfChars as its payload
      dispatch(storeTargetWord(arrayOfChars));
      /** a layout div is returned with some bootstrap styling and custom styling see app.css
       * inside the div, the map function is called on the arrayOfChars to iterate over each char as el
       * on each iteration the WordCharacter component is returned with a key (incremented on each iteration),
       * and el as char prop
       */
      return (
        <div className="word-line-con text-center row justify-content-center">
          {arrayOfChars.map((el) => (
            <WordCharacter key={(key += 1)} char={el} />
          ))}
        </div>
      );
    }
    /**
     * if the gamePhases exceed 12 (i.e the user has lost)
     * these elements are returned indicating the user as lost
     * in the second h5 tag, the word the user was trying to guess is shown to the user.
     */
    return (
      <>
        <h5 className="text-center losing-text">
          {' '}
          You lost, click the reset button to try again{' '}
        </h5>
        <h5 className="text-center"> The word was: {words[wordIndex]}</h5>
      </>
    );
  }
  /**
   * checkWinCondition function is used to determine if the user has won. (takes on param winArr)
   * result variable is declared as false (default)
   * if the winArr is undefined returns the result
   * if the winArr is not undefined, assigns the result of !winArr.length to the result variable
   * (if the winArr has no more chars in it the user has won and the aforementioned assignment will be true.)
   * then returns the result
   */
  function checkWinCondition(winArr) {
    let result = false;
    if (winArr === undefined) {
      return result;
    }
    if (winArr !== undefined) {
      result = !winArr.length;
    }
    return result;
  }
  /**
   * component layout return
   * bootstrap components and some styling used for the layout
   * in the Col component an if else state runs
   * it calls the checkWinCondition function with the wordTrackArr as its param
   * if true,
   * returns the h5 tag with text informing the user that they won!
   * if false calls the display function with status as its param
   */
  return (
    <Container fluid className="pb-5">
      <Row>
        <Col className="col-md-12">
          {checkWinCondition(wordTrackArr) ? (
            <>
              <h5 className="text-center">
                {' '}
                You won!, click the reset button to try again.
              </h5>
              <h5 className="text-center">The word was: {words[wordIndex]}</h5>
            </>
          ) : (
            display(status)
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default WordLine;
