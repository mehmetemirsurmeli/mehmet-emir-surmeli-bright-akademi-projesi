import React from 'react'

const Contact = () => {
    return (
        <>
            <div className='Contact-container '>
                <div className='Contact-left'>
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Ad Soyad :</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">E-Mail :</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="mb-3 ">
                            <label for="exampleInputPassword1" class="form-label">Mesaj :</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className='Contact-right'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.138299389736!2d29.00424147643903!3d41.04410461721746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7a24975fe5d%3A0xa05d7aa13cfcaf89!2sBah%C3%A7e%C5%9Fehir%20%C3%9Cniversitesi%20Wissen%20Akademie!5e0!3m2!1str!2str!4v1704799957683!5m2!1str!2str" width="600" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                </div>

            </div>




        </>
    )
}

export default Contact