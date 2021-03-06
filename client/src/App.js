import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Chat from './components/chat/chat.comp';
import Join from './components/join/join.comp';

function App() {
  return (
    <Router>
      <Route path='/' exact component={Join} />
      <Route path='/chat' component={Chat} />
    </Router>
  );
}

export default App;
