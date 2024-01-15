import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HomeContent = () => {
    return (
        <>
            <div className='container d-flex justify-content-center mt-5'>
                <div class="wrapper">
                    <div class="text-white fw-semibold fs-1 p-2">
                        BAU onaylı sertifikanla, yazılımı en üstlere taşı.
                    </div>
                </div>
            </div>

            <div className='container d-flex align-items-center justify-content-center mt-5 gap-3'>
                <Link to="/hakkimizda"><Button className='rounded-pill fs-5 buttons border-0' style={{ width: '140px' }}>Detaylı Bilgi</Button></Link>
                <Link to="/contact"><Button className='rounded-pill fs-5 buttons border-0' style={{ width: '140px' }}>İletişim</Button></Link>
            </div>
        </>
    )
}

export default HomeContent