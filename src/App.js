// useState imported for use in the modal logic
import { useState } from 'react';
// app wide style sheets imported (see sheet for comments on component styles)
import './App.css';
// bootstrap css imported (used for some layout styling)
import 'bootstrap/dist/css/bootstrap.min.css';
// bootstrap components imports
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// importing app components
import Header from './components/Header';
import WordLine from './components/WordLine';
import Letters from './components/Letters';
import HangMan from './components/HangMan';
import Controls from './components/Controls';
import HelpModal from './components/HelpModal';

function App() {
  // openModal state set to default of false - toggleModal declared as its update method.
  const [openModal, toggleModal] = useState(false);
  /** Main app return logic
   *First the 'help-btn' is declared with an onClick event that fires the toggleModal function with a payload of true.
   Using in-line JS logic - if openModal is true, the HelpModal component is rendered with a prop of closeModal (toggleModal func)
   Rest of the return is bootstrap layout components and the imported components.
   */
  return (
    <div className="App">
      <button
        type="button"
        className="btn btn-primary help-btn"
        onClick={() => {
          toggleModal(true);
        }}
      >
        Help 🆘
      </button>
      {openModal && <HelpModal closeModal={toggleModal} />}
      <Header />
      <WordLine />
      <Container fluid className="justify-content-center align-items-center">
        <h3 className="text-center">Click on the Letter buttons to guess</h3>
        <Row className="game-field pt-2">
          <Col className="col-md-6 d-flex justify-content-center align-items-center">
            <HangMan />
          </Col>
          <Col className="col-md-6 d-flex justify-content-center align-items-center">
            <Letters />
          </Col>
        </Row>
      </Container>
      <Controls />
    </div>
  );
}

export default App;
