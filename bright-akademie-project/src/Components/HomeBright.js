import React from 'react'
import { Card, Container } from 'react-bootstrap'
import balon1 from '../Pages/Image/1.png'
import balon2 from '../Pages/Image/2.png'
import balon3 from '../Pages/Image/3.png'
import balon4 from '../Pages/Image/4.png'
import balon5 from '../Pages/Image/5.png'
import balon6 from '../Pages/Image/6.png'
import balon7 from '../Pages/Image/7.png'
import balon8 from '../Pages/Image/8.png'
import balon9 from '../Pages/Image/9.png'


const HomeBright = () => {
    return (
        <>
            <Container className='d-flex justify-content-center'>
                <h2 className='title display-6 my-5 text-white fw-semibold'>BAU Bright Süreci</h2>
            </Container>
            <Container className='mb-5'>
                <div class="row justify-content-center mb-30-none">
                    <div class="col-sm-10 col-md-6 col-lg-3">
                        <div class="pricing-item">
                            <span class="tag">Ön Eleme</span>
                            <div class="pricing-thumb">
                                <img src={balon1} alt="pricing" />
                            </div>
                            <div class="pricing-content">
                                <div class="pricing-header">
                                    <span class="color-bau-surec">
                                        Adaylar online olarak başvuru formunu doldurur ve taleplerini iletirler. Eğitim Çözümleri Departmanımız eğitim kriterlerine uygun katılımcılara sınav davetini ileteceklerdir.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-10 col-md-6 col-lg-3">
                        <div class="pricing-item">
                            <span class="tag">WGYS</span>
                            <div class="pricing-thumb">
                                <img src={balon2} alt="pricing" />
                            </div>
                            <div class="pricing-content">
                                <div class="pricing-header">
                                    <span class="color-bau-surec">
                                        Ön elemeyi geçen katılımcılarımız, sayısal ve sözel becerilerinin ölçüldüğü sınava tabi tutulacaktır.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-10 col-md-6 col-lg-3">
                        <div class="pricing-item">
                            <span class="tag">Teknik Mülakat</span>
                            <div class="pricing-thumb">
                                <img src={balon3} alt="pricing" />
                            </div>
                            <div class="pricing-content">
                                <div class="pricing-header">
                                    <span class="color-bau-surec">
                                        Eğitmenler tarafından alan mülakatları gerçekleştirilir.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-10 col-md-6 col-lg-3">
                        <div class="pricing-item">
                            <span class="tag">IK Mülakatı</span>
                            <div class="pricing-thumb">
                                <img src={balon4} alt="pricing" />
                            </div>
                            <div class="pricing-content">
                                <div class="pricing-header">
                                    <span class="color-bau-surec">
                                        İnsan Kaynakları departmanımız tarafından mülakat gerçekleştirilir.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-10 col-md-6 col-lg-3">
                        <div class="pricing-item">
                            <span class="tag">Sınıf Eğitimi</span>
                            <div class="pricing-thumb">
                                <img src={balon5} alt="pricing" />
                            </div>
                            <div class="pricing-content">
                                <div class="pricing-header">
                                    <span class="color-bau-surec">
                                        Öğrencilerimiz 6 ay süre ile haftanın belirli günlerinde tam zamanlı olarak Bahçeşehir Üniversitesi Wissen Kampüsü’nde eğitim alırlar.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-10 col-md-6 col-lg-3">
                        <div class="pricing-item">
                            <span class="tag">Proje</span>
                            <div class="pricing-thumb">
                                <img src={balon6} alt="pricing" />
                            </div>
                            <div class="pricing-content">
                                <div class="pricing-header">
                                    <span class="color-bau-surec">
                                        Alanında uzman deneyimli eğiticilerimiz ile 6 ay süren temel eğitimin ardından öğrencilerimiz, bireysel ve takım halinde geliştirerek öğrendiklerini uygulayıp bitirme projelerini oluşturacaklar.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-10 col-md-6 col-lg-3">
                        <div class="pricing-item">
                            <span class="tag">Sertifika</span>
                            <div class="pricing-thumb">
                                <img src={balon7} alt="pricing" />
                            </div>
                            <div class="pricing-content">
                                <div class="pricing-header">
                                    <span class="color-bau-surec">
                                        6 aylık eğitimlerini başarı ile tamamlayan mezunlarımız Bahçeşehir Üniversitesi sertifikası alırlar. Ayrıca Microsoft Uluslararası Sertifika Sınavı’na ücretsiz olarak yönlendirilirler.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-10 col-md-6 col-lg-3">
                        <div class="pricing-item">
                            <span class="tag">Mentorluk</span>
                            <div class="pricing-thumb">
                                <img src={balon8} alt="pricing" />
                            </div>
                            <div class="pricing-content">
                                <div class="pricing-header">
                                    <span class="color-bau-surec">
                                        Öğrencilerimize 12 ay boyunca kariyer danışmanlığı ayrıca eğitim süresinde teknik uzman tarafından mentorluk desteği sağlanır.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-10 col-md-6 col-lg-3">
                        <div class="pricing-item">
                            <span class="tag">İstihdam</span>
                            <div class="pricing-thumb">
                                <img src={balon9} alt="pricing" />
                            </div>
                            <div class="pricing-content">
                                <div class="pricing-header">
                                    <span class="color-bau-surec">
                                        BAU Bright mezunları bilişim sektöründe profesyonel iş hayatlarına başlamak üzere yönlendirilerek istihdamları sağlanır.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default HomeBright