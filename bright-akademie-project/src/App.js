import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>

          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
