import React from 'react';
import {ListGroup, Container} from 'react-bootstrap';
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
                <ListGroup.Item as='div'><Food/></ListGroup.Item>
                <ListGroup.Item as='div'><Food/></ListGroup.Item>
                <ListGroup.Item as='div'><Food/></ListGroup.Item>
                <ListGroup.Item as='div'><Food/></ListGroup.Item>
                <ListGroup.Item as='div'><Food/></ListGroup.Item>
                <ListGroup.Item as='div'><Food/></ListGroup.Item>
            </ListGroup>
        </Container>
    );
}

export default FoodCategory;