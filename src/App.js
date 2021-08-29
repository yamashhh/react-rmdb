import React from 'react';

// React without JSX
// https://reactjs.org/docs/react-without-jsx.html
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

function App() {
  return (
    <div className="App">
      <Header />
      <GlobalStyle />
    </div>
  );
}

export default App;
