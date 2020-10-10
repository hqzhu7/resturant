import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Food from '../component/Food'

const FoodCategory = ()=>{
    return (
        <ListGroup variant="flush">
            <ListGroup.Item as='div'><Food/></ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
    );
}

export default FoodCategory;