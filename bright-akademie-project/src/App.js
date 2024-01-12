import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Header from './Components/Header';
import HomePage from './Pages/HomePage/HomePage';
import HakkimizdaPage from './Pages/HakkımızdaPage/HakkimizdaPage';
import EğitmenlerPage from './Pages/EğitmenlerPage/EğitmenlerPage';
import EgitmenDetay from './Pages/EğitmenDetay/EgitmenDetay';
import EgitimDetay from './Pages/EgitimDetay/EgitimDetay';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/egitimdetay' element={<EgitimDetay />}></Route>
          <Route path='/egitmendetay' element={<EgitmenDetay />} />
          <Route path='/egitmenler' element={<EğitmenlerPage />} />
          <Route path='/hakkımızda' element={<HakkimizdaPage />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
