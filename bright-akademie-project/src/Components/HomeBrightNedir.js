import React from 'react'
import { Card, Col, Container } from 'react-bootstrap'
import logo from '../Pages/Image/featurei1.png'
import logo2 from '../Pages/Image/featurei2.png'
import logo3 from '../Pages/Image/featurei3.png'

const HomeBrightNedir = () => {
    return (
        <>
            <div class="container mt-5">
                <div class="section-header mw-725 left-style">
                    <h2 class="title display-6 text-white fw-semibold">BAU Bright Nedir? </h2>
                    <p className='text-white title'>
                        Bahçeşehir Üniversitesi tarafından yürütülen ve proje deneyimi yüksek eğitici kadrosu ile fark yaratacak yazılım - sistem uzmanları yetiştiren bir kariyer programıdır. Sektör ihtiyaçları göz önünde bulundurularak hazırlanmış güncel ve son teknoloji eğitim içerikleriyle BAU Bright eğitimleri devam ediyor! Eğitimini tamamlayan adaylar bilişim sektöründe işe yerleştirilmektedir.
                    </p>
                </div>

            </div>
            <Container>
                <div className='d-flex align-items-center justify-content-center text-center mt-5 row'>
                    <div className='col-md-4 bg-transparent bg-sekilli border-0'>
                        <img className='' src={logo} />
                        <h4 className='mt-4 text-white'>Eğitim</h4>
                    </div>

                    <div className='col-md-4 bg-transparent bg-sekilli-1 border-0'>
                        <img src={logo2} />
                        <h4 className='mt-4 text-white'>Proje</h4>

                    </div>

                    <div className='col-md-4 bg-transparent bg-sekilli-2 border-0'>
                        <img src={logo3} />
                        <h4 className='mt-4 text-white'>İş Hayatı</h4>

                    </div>
                </div>
            </Container>

        </>
    )
}

export default HomeBrightNedir