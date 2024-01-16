import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Row, InputGroup } from 'react-bootstrap'

const Contact = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    }
    return (
        <><Container className='contactbg m-auto d-flex justify-content-center align-items-center'>
            <Row>
                <Col>
                    <Card className='p-5 my-5'>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="4" controlId="validationCustom01">
                                    <Form.Label>Ad :</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Ad"
                                        defaultValue="Mehmet Emir"

                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationCustom02">
                                    <Form.Label>Soyadı :</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Last name"
                                        defaultValue="Sürmeli"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>

                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="6" controlId="validationCustom03">
                                    <Form.Label>Şehir</Form.Label>
                                    <Form.Control type="text" placeholder="Şehir" required />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid city.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="3" controlId="validationCustom04">
                                    <Form.Label>İlçe</Form.Label>
                                    <Form.Control type="text" placeholder="İlçe" required />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid state.
                                    </Form.Control.Feedback>
                                </Form.Group>

                            </Row>
                            <Form.Group className="mb-3">
                                <Form.Check
                                    required
                                    label="Okudum! Onaylıyorum?"
                                    feedback="You must agree before submitting."
                                    feedbackType="invalid"
                                />
                            </Form.Group>
                            <Button type="button">Gönder</Button>
                        </Form>
                    </Card>
                </Col>
                <Col>
                    <Card className='border-0 my-5 w-75'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.138299389736!2d29.00424147643903!3d41.04410461721746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7a24975fe5d%3A0xa05d7aa13cfcaf89!2sBah%C3%A7e%C5%9Fehir%20%C3%9Cniversitesi%20Wissen%20Akademie!5e0!3m2!1str!2str!4v1704799957683!5m2!1str!2str" width="420" height="345" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </Card>
                </Col>
            </Row>



        </Container>






        </>
    )
}

export default Contact