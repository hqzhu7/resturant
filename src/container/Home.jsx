import React from 'react';
import { useMediaQuery } from 'react-responsive'
import {Container, Row, Col, Card, Image} from 'react-bootstrap';

const Home = ()=> {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
      });

    return(
        <Container 
            style={{
                justifyContent: 'center',
                paddingTop:'6rem',
            }}>
            <Row>
                <Col>
                    <Image 
                    src="https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2020/05/Dumpling-Daughter-feat.jpg" 
                    fluid 
                    style={isDesktopOrLaptop ? {height:'350px', width:'100%'}:{height:'200px', width:'100%'}}
                    /> 
                </Col>
            </Row>
            <Row style={{marginTop: '2rem'}}>
                <Col>
                    <Card >
                        <Card.Body>
                            <Card.Title>Address</Card.Title>
                            <Card.Text>
                                113-23 45th ave, flushing, Ny 11354
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card >
                        <Card.Body>
                            <Card.Title>Telephone</Card.Title>
                            <Card.Text>
                                123-45-2345
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;