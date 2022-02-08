import React from 'react';
import { PropTypes } from 'prop-types';
import '../resources/css/helpModal.css';
/** HelpModal component
 * used to display the help modal that can be shown by click the help button in the UI.
 * Two events are attached to this modal
 * the closeModal prop passed down is a function that toggles the modals state.
 * the X button has a onClick event that first the closeModal function with a false param
 * the close button fires the exact same function with its onClick event.
 * see the resources/css/helpModal.css for styling
 */
function HelpModal({ closeModal }) {
  return (
    <div className="help-modal-background">
      <div className="help-modal-container">
        <div className="help-modal-close-button-top">
          <button
            type="button"
            className="close-icon"
            onClick={() => closeModal(false)}
          >
            X
          </button>
        </div>
        <div className="help-modal-title">
          <h2>Looking for help?</h2>
        </div>
        <div className="help-modal-body">
          <ul>
            <li>
              <h4>Objective:</h4>
              <p> Guess the word before you are hung.</p>
            </li>
            <li>
              <h4>How to pick a letter:</h4>
              <p>
                Click on a letter in the letters selection box - it will appear
                green if correct and red if incorrect.
              </p>
            </li>
            <li>
              <h4>How to win:</h4>
              <p>
                You will notice evertime you click the correct letter, the
                letters will appear in their position on the wordline,
                ultimately you will have to correctly guess all the letters in
                the word to win.
              </p>
            </li>
            <li>
              <h4> Losing:</h4>
              <p>
                If you have incorrectly guessed the letter 11 times, you will
                loose. On each incorrect guess you will see your character is
                being drawn.
              </p>
            </li>
          </ul>
        </div>
        <div className="help-modal-footer">
          <button
            type="button"
            className="close-button"
            onClick={() => closeModal(false)}
          >
            close
          </button>
        </div>
      </div>
    </div>
  );
}

HelpModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default HelpModal;
