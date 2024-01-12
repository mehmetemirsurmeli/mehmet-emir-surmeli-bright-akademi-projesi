import React from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import resim1 from '../Image/Ataturk.jpg'
import resim2 from '../Image/engiiiinnnn.png'
import resim3 from '../Image/Angelina.jpg'

const EğitmenlerPage = () => {
    return (
        <>
            <Container className='d-flex'>
                <Row>
                    <Col>
                        <Card className='ms-4' style={{ width: '18rem' }}>
                            <Card.Img className='p-4' variant="top" src={resim1} />
                            <Card.Body>
                                <Card.Title>Mustafa Kemal Atatürk</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='ms-4' style={{ width: '18rem' }}>
                            <Card.Img className='p-4' variant="top" src={resim2} />
                            <Card.Body>
                                <Card.Title>Engin Niyazi Ergül</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='ms-4' style={{ width: '18rem' }}>
                            <Card.Img className='p-4' variant="top" src={resim3} />
                            <Card.Body>
                                <Card.Title>Angelina Jolie</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='ms-4' style={{ width: '18rem' }}>
                            <Card.Img className='p-4' variant="top" src={resim1} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default EğitmenlerPage;