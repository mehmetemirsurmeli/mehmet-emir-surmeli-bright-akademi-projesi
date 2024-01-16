import React from 'react'
import { Container, NavLink } from 'react-bootstrap'
import resim1 from '../Image/Ataturk.jpg'
import resim2 from '../Image/engiiiinnnn.png'
import resim3 from '../Image/atam.webp'
import resim4 from '../Image/mehmet.jpg'
import EgitimDetay from '../EgitimDetay/EgitimDetay'
import { Link } from 'react-router-dom'
const EğitmenlerPage = () => {
    return (
        <>
            <Container className='mb-5'>
                <div class="card-wrapper m-auto">
                    <Link to="/egitmendetay" class="card-items">
                        <img src={resim2} alt="Card Image" />
                        <span class="developer">Developer</span>
                        <h3>Daha Fazla Bilgi İçin Tıklayınız...</h3>

                        <div class="arrow">
                            <i class="fas fa-arrow-right card-icon"></i>
                        </div>
                    </Link>
                    <Link class="card-items" to="/egitmendetay" element={<EgitimDetay />}>
                        <img src={resim3} alt="Card Image" />
                        <span class="developer">Developer</span>
                        <h3>Daha Fazla Bilgi İçin Tıklayınız...</h3>
                        <div class="arrow">
                            <i class="fas fa-arrow-right card-icon"></i>
                        </div>
                    </Link>
                    <Link to="/egitmendetay" class="card-items">
                        <img src={resim4} alt="Card Image" />
                        <span class="developer">Developer</span>
                        <h3>Daha Fazla Bilgi İçin Tıklayınız...</h3>

                        <div class="arrow">
                            <i class="fas fa-arrow-right card-icon"></i>
                        </div>
                    </Link>
                </div>

            </Container >
        </>
    )
}

export default EğitmenlerPage;