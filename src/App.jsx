import { BrowserRouter, Link } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import { Router } from './router/Router';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
      </div>
      <Router />
    </BrowserRouter>
  );
}

export default App;
