import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Card, Button, Nav } from "react-bootstrap";

export default function Display() {
  const { header, title, text, theLink } = this.props;
  return (
    <div>
      <Card>
        <Card.Header>{header}</Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Nav.Link href={theLink}>
            <Button variant="primary" size="lg">
              Go somewhere
            </Button>
          </Nav.Link>
        </Card.Body>
      </Card>
    </div>
  );
}
