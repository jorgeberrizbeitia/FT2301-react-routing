import logo from './logo.svg';
import './App.css';
import TimerControl from './components/TimerControl';

import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      {/* <TimerControl />
      <TimerControl />
      <TimerControl />
      <TimerControl />
      <TimerControl />
      <TimerControl />
      <TimerControl /> */}

      {/* Organizamos nuestras rutas de Frontend */}


      <nav>
        {/* <a href="/">Home</a>
        <a href="/about">About</a> */}
        {/* nunca debemos usar <a>, en vez de eso, usamos <Link> y <NavLink> */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <br />
        <Link to="/profile/bob">Profile Bob</Link>
        <br />
        <Link to="/profile/calamardo">Profile Calamardo</Link>
      </nav>  

      <Routes>
        {/* todo lo que hay dentro de las rutas está condicionado */}
        <Route path="/" element={ <Home /> }/>
        <Route path="/about" element={ <About /> }/>
        <Route path="/profile/:username" element={ <Profile /> }/>

      </Routes>


    </div>
  );
}

export default App;
