import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import pro1 from '../Pages/Image/pro5.png'
import pro2 from '../Pages/Image/pro4.png'
import pro3 from '../Pages/Image/pro3.png'
import pro4 from '../Pages/Image/pro2.png'
import backgorundcard from '../Pages/Image/pricing-bg.jpg'
import { NavLink } from 'react-router-dom'


const HomeBrightWhy = () => {
    return (
        <>
            <Container className='why-join'>
                <Row>
                    <Col className='d-flex flex-column text-center why-join'>
                        <h1 className='mt-5 title text-white fw-semibold display-5 '>Neden Katılmalıyım?</h1>
                        <p className='title text-white'>BAU Bright Eğitim ve İstihdam Projesi, Bahçeşehir Üniversitesi ve Wissen Teknoloji’nin bilişim, danışmanlık, telekomünikasyon ve yazılım sektörleri başta olmak üzere 5000+ iş ortağı ile desteklenmektedir.</p>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col className='card-background cards-border text-decoration-none'>
                        <h4 class="text-white mt-2 fw-semibold fs-4">6 Ay Uygulamalı Eğitim</h4>
                        <p className='text-white'>Alanında uzman deneyimli eğiticilerimiz ile 6 ay sürecek eğitimimiz kapsamında öğrencilerimiz teknik eğitim ve kariyer eğitimi alacaklardır.</p>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col className='card-background cards-border text-decoration-none'>
                        <h4 class="text-white mt-2 fw-semibold fs-4">Proje</h4>
                        <p className='text-white'>
                            Alanında uzman deneyimli eğiticilerimiz ile 6 ay süren temel eğitim boyunca katılımcılarımız kazandıkları yetkinlikleri senaryo niteliğindeki projelerde geliştirirler. Eğitim süresi dışında ise ev ve grup projeleri üzerine çalışarak becerilerini pekiştirirler.
                        </p>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col className='card-background cards-border text-decoration-none'>
                        <h4 class="text-white mt-2 fw-semibold fs-4">İş Hayatı</h4>
                        <p className='text-white'>
                            Eğitim ve proje süreçlerini tamamlayan BAU Bright mezunları, alanında profesyonel hizmet veren IK firmamız tarafından, bilişim alanında faaliyet gösteren firmalara yönlendirilerek iş hayatlarına başlarlar.
                        </p>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col className='card-background cards-border text-decoration-none'>
                        <h4 class="text-white mt-2 fw-semibold fs-4">Kariyer Danışmanlığı</h4>
                        <p className='text-white'>
                            Katılımcılara 12 ay boyunca kariyer danışmanlığı ayrıca eğitim süresince teknik uzman tarafından mentorluk hizmeti verilir.
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default HomeBrightWhy