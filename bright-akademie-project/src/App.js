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
import FullStackEgitim from './Pages/FullStackEgitim/FullStackEgitim';
import NetworkEgitimPage from './Pages/NetworkEgitim/NetworkEgitimPage';
import BulutBilisimEgitim from './Pages/BulutBilisimEgitim/BulutBilisimPage';
import FullDataEgitim from './Pages/FullDataUzmanlık/FullDataPage';
import { AppContext } from './Context/Context';


function App() {
  return (
    <>
      <AppContext.Provider value={{}}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/egitimdetay' element={<EgitimDetay />} />

            <Route path='/fullstackegitim' element={<FullStackEgitim />} />
            <Route path='/networkegitim' element={<NetworkEgitimPage />} />
            <Route path='/bulutbilisimegitim' element={<BulutBilisimEgitim />} />
            <Route path='/fulldataegitim' element={<FullDataEgitim />} />
            <Route path='/egitmendetay' element={<EgitmenDetay />} />
            <Route path='/egitmenler' element={<EğitmenlerPage />} />
            <Route path='/hakkimizda' element={<HakkimizdaPage />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AppContext.Provider>
    </>
  );
}

export default App;
