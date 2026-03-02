import React from 'react';
import User from './components/User';
import Parent from './components/Parent';
import State from './hooks/State';
import Form from './hooks/Form';

const App = () => {
  return (
    <>
      <div>App</div>
      <Form/>
      <State/>
      <Parent />
      <User name="xyz" age={33} skills={["HTML", "CSS", "JS", "JAVA"]} />
    </>
  );
};

export default App;