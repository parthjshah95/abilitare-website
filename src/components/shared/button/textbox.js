import React from 'react';
import Card from 'react-bootstrap/Card';
 
const TextBox = ({ variant, header, value, style }) => {
  return (
    <div>
      <Card
        bg={variant.toLowerCase()}
        text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
        style={style}
        className="my-6 w-60"
      >
        <Card.Header>{header}</Card.Header>
        <Card.Body>
          <Card.Title>{value}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};
 
export default TextBox;