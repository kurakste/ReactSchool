import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Demo from './demo';
import Items from './Items';

function App() {
  return (
    <dev>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      <Demo />
      <Items />
      <Items />
      <Items />
    </dev>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
