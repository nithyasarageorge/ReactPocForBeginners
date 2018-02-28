import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Sample from './sample';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>
    <Hello name="World " />
    <h1> This is my first <span style={ {color: "green"} }> React </span> program</h1>
    <h2>Happy Work !!</h2>
    <Sample samplename="Thank you :)" />
  </div>
);

render(<App />, document.getElementById('root'));
