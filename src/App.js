import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Movies from './components/Movies';
import Pagination from './components/Pagination';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Favorites from './components/Favorites';

function App() {
  return (
    <BrowserRouter>
      {/* <h1>Hello World!! 🚀🚀</h1> */}
      {/* <h2>Navbar</h2> */}
      <NavBar/>
      <Routes>
        <Route path="/" element = {
          <>
            <Banner></Banner>
            <Movies/>
            {/* <Pagination/> */}
          </>
        }>
        </Route>
        <Route path="/favorites" element = {
          <Favorites/>
        }>
        </Route>
      </Routes>
      {/* <Banner/> */}
      {/* <h2>Trending</h2> */}
      {/* <h2>Pagination</h2> */}
    </BrowserRouter>
  );
}

export default App;
