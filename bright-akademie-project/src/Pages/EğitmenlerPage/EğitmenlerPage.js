import React from 'react'
import { Container, NavLink } from 'react-bootstrap'
import resim1 from '../Image/Ataturk.jpg'
import resim2 from '../Image/engiiiinnnn.png'
import resim3 from '../Image/Angelina.jpg'
import resim4 from '../Image/mehmet.jpg'
import EgitimDetay from '../EgitimDetay/EgitimDetay'
const EğitmenlerPage = () => {
    return (
        <>
            <Container className='mb-5'>
                <div class="card-wrapper m-auto">
                    <a href='/egitmendetay' class="card-items">
                        <img src={resim2} alt="Card Image" />
                        <span class="developer">Developer</span>
                        <h3>Daha Fazla Bilgi İçin Tıklayınız...</h3>

                        <div class="arrow">
                            <i class="fas fa-arrow-right card-icon"></i>
                        </div>
                    </a>
                    <a href='/egitmendetay' class="card-items" to="/egitmendetay" element={<EgitimDetay />}>
                        <img src={resim1} alt="Card Image" />
                        <span class="developer">Developer</span>
                        <h3>Daha Fazla Bilgi İçin Tıklayınız...</h3>
                        <div class="arrow">
                            <i class="fas fa-arrow-right card-icon"></i>
                        </div>
                    </a>
                    <a href='/egitmendetay' class="card-items">
                        <img src={resim4} alt="Card Image" />
                        <span class="editor">Editor</span>
                        <h3>Daha Fazla Bilgi İçin Tıklayınız...</h3>

                        <div class="arrow">
                            <i class="fas fa-arrow-right card-icon"></i>
                        </div>
                    </a>
                </div>

            </Container >
        </>
    )
}

export default EğitmenlerPage;