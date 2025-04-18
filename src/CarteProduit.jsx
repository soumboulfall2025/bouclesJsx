import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function CarteProduit({ produit }) {
  return (
    <Card style={{ width: '18rem', margin: '1rem' }}>
      <Card.Img variant="top" src={produit.image} />
      <Card.Body>
        <Card.Title>{produit.title}</Card.Title>
        <Card.Text>{produit.description}</Card.Text>
        <Button variant="primary">Voir plus</Button>
      </Card.Body>
    </Card>
  );
}

export default CarteProduit;
