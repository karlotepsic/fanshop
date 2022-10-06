import './App.css';
import logo from './assets/img/logo.png';
import { Routes, Route } from 'react-router-dom';
import Proizvodi from './pages/proizvodi';
import ONama from './pages/o nama';
import Kontak from './pages/kontakt';
import { useNavigate } from 'react-router';
import Proizvod from './pages/proizvod';

function App() {
  let navigate = useNavigate();
  const handleClick = (e) =>
    navigate(e.target.textContent.replace(' ', '-').toLowerCase());

  return (
    <div className='App'>
      <nav>
        <img src={logo} height='100%' />
        <div>
          <span onClick={handleClick}>proizvodi</span>
          <span onClick={handleClick}>o nama</span>
          <span onClick={handleClick}>kontakt</span>
        </div>
      </nav>
      <main>
        <Routes>
          <Route path='/' element={<Proizvodi />} />
          <Route path='/proizvodi' element={<Proizvodi />} />
          <Route path='/o-nama' element={<ONama />} />
          <Route path='/kontakt' element={<Kontak />} />
          <Route path='/proizvodi/:imeProizvoda' element={<Proizvod />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
