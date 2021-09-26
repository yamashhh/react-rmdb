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
import Movie from './components/Movie';
import Login from './components/Login';
import NotFound from './components/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context';

function App() {
  return (
    // @ts-ignore
    <BrowserRouter className="App">
      <UserProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/:movieId" element={<Movie />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <GlobalStyle />
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
