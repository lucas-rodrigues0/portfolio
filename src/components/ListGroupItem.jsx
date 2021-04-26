import React from 'react';
import { Badge, Card, Figure, ListGroup, Row } from 'react-bootstrap';

export default function ListGroupItem({ card_text, figure_src }) {
  return (
    <ListGroup.Item>
      <Row className="justify-content-between">
        <Card.Text as="span">{ card_text }</Card.Text>
        <div>
          { figure_src && figure_src.map((figure) => (
            <Badge variant="light" >
              <Figure.Image
                width={ 30 }
                height={ 30 }
                src={ figure }
              />
            </Badge>
          ))}
        </div>
      </Row>
    </ListGroup.Item>
  );
}
