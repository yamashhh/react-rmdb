// React without JSX
// https://reactjs.org/docs/react-without-jsx.html
//
// import React from 'react';
//
// function Star() {
//   return React.createElement('div', null, 'This is a little start');
// }
//
// function App() {
//   return Star();
// }

import { GlobalStyle } from './GlobalStyle';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <GlobalStyle />
    </div>
  );
}

export default App;
