import React from 'react';
import { useSelector } from 'react-redux';
// HangMan component - renders the hangman graphics from the hangman state.
function HangMan() {
  // hangmanImg variable assigned the value of the hangman state
  const hangManImg = useSelector((state) => state.hangman);
  // hangmanStage assigned the value of the controls state's gamePhase attribute
  const hangManStage = useSelector((state) => state.controls.gamePhase);
  /**
   * The hangman return section
   * img attribute returned within a div container (see app.css for styling)
   * the src attribute is set to the appropriate stages img path.
   * hangManImg state is called and the hangmanStage variable is used to indicate the index to access and then,
   * corresponding img attributes' path value is returned.
   */
  return (
    <div className="hang-man-container">
      <img
        src={hangManImg[hangManStage].img}
        alt="hang-man-graphic"
        className="hang-man-graphic"
      />
    </div>
  );
}

export default HangMan;
