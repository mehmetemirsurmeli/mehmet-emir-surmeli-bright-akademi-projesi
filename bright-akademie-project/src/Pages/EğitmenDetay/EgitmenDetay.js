import React from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import resim1 from '../Image/Ataturk.jpg'
import resim2 from '../Image/engiiiinnnn.png'
import resim3 from '../Image/Angelina.jpg'
import resim4 from '../Image/mehmet.jpg'
const EgitmenDetay = () => {
    return (
        <>
            <Container>
                <div class="card mb-3 m-auto mt-4 bg-transparent border-0 d-flex align-items-center">
                    <div class="row g-0">
                        <div class="col-md-3 m-auto text-center">
                            <img width={300} height={300} src={resim2} class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8 mt-5 text-center">
                            <div class="card-body">
                                <h5 class="card-title text-white display-4 fw-semibold">Engin Niyazi Ergül</h5>
                                <p class="card-text text-white dis">Yetenekler: React.js · AspNet Core MVC · Eğitim Yönetimi · C# · .NET CORE uzman deneyim ve bilgilerle iyi bir yönlendirme sağlayan çok iyi bir hocammmm mükemmel ötesi maşallah!!!!</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mb-3 m-auto mt-5 bg-transparent border-0">
                    <div class="row g-0">
                        <div class="col-md-3 m-auto text-center">
                            <img width={300} height={300} src={resim1} class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8  mt-5 text-center">
                            <div class="card-body">
                                <h5 class="card-title text-white display-4 fw-semibold">Mustafa Kemal Atatürk</h5>
                                <p class="card-text text-white dis">Öğretmenler; Yeni nesli, Cumhuriyetin fedakâr öğretmen ve eğitimcilerini, sizler yetiştireceksiniz ve yeni nesil, sizin eseriniz olacaktır</p>

                            </div>
                        </div>
                    </div>
                </div>


                <div class="card mb-3 m-auto mt-4 bg-transparent border-0 mb-5">
                    <div class="row g-0">
                        <div class="col-md-3 m-auto text-center">
                            <img width={300} height={300} src={resim4} class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8 mt-5 text-center">
                            <div class="card-body">
                                <h5 class="card-title text-white display-4 fw-semibold">Mehmet Emir Sürmeli</h5>
                                <p class="card-text text-white dis">Full Stack Devoloper kendini geliştirmeye kararlı ve hırslı bir öğrencidir.
                                    Kendini geliştirmek için Elinde Geleni Yapıyor..!!!!</p>

                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default EgitmenDetay;