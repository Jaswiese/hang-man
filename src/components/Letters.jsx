import React from 'react';
// importing redux toolkit functions
import { useSelector } from 'react-redux';
// importing child component
import Letter from './Letter';
/**
 * Letters component the parent component to the letter component
 * this component is used primarily for layout configuration and to pass down the appropriate state to the letter component.
 * see app.css for styling
 */
function Letters() {
  // lettersStore variable assigned the value of the letters state at index 0
  const lettersStore = useSelector((state) => state.letters[0]);
  // lettersCollection assigned the value of the letterStore Letters attribute.
  const lettersCollection = lettersStore.Letters;
  /**
   * divs with container styling used for layout.
   * the map method is used to iterate over the lettersCollection
   * on each iteration;
   * a letter component is return with 1 key and 4 props
   * the letter attribute is assigned to the key and,
   * the letter prop
   * selected attribute is assigned to the selected prop
   * contains attribute is assigned to the contains prop
   * both attribute is assigned to the both prop.
   */
  return (
    <div className="letters-container">
      <div className="letter-container">
        {lettersCollection.map((letter) => (
          <Letter
            key={letter.letter}
            letter={letter.letter}
            selected={letter.selected}
            contains={letter.contains}
            both={letter.both}
          />
        ))}
      </div>
    </div>
  );
}

export default Letters;
