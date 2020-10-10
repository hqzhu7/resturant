import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Food from '../component/Food'

const FoodCategory = ()=>{
    return (
        <Container 
            style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
            <ListGroup variant="flush">
                <ListGroup.Item as='div'><Food/></ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
        </Container>
    );
}

export default FoodCategory;