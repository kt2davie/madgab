import React, { useState } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import axios from 'axios'

import './App.css';

const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(false);

  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>Show Answer</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">Answer</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  );
};

const Clue = ({children}) => {
    const [clue, setClue] = useState("Click Generate to start!");
    const [answer, setAnswer] = useState("");
return (<> <Button onClick={async ()=>{
    var response = await axios.get("https://krx9x5v1j2.execute-api.us-east-1.amazonaws.com/prod");
    setClue(response.data.gab); setAnswer(response.data.answer); }}> Generate New </Button> {clue}
    <ExampleToast>{answer}</ExampleToast>

    </> );
};

const App = () => (
  <Container className="p-3">
    <Jumbotron>
      <h1 className="header">Welcome To MadGab</h1>
      <Clue> Click Generate to start! </Clue>
    </Jumbotron>
  </Container>
);

export default App;
