import React from 'react';
import Card from 'react-bootstrap/Card'

const Food = (props) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" 
            style={{width: '100%'}}
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Xiao_Long_Bao_at_Nanxiang_Mantou_Dian_1.jpg/1200px-Xiao_Long_Bao_at_Nanxiang_Mantou_Dian_1.jpg' />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Food;