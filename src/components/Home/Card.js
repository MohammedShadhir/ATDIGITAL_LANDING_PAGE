import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

const CardComponent = ({ imageUrl, heading, paragraph, imagePosition }) => {
  const positionClass = imagePosition === "right" ? "order-md-1" : "";

  return (
    <Card className={`border-0 mb-3 ${positionClass}`}>
      <Card.Body className="d-flex align-items-center justify-content-center">
        <Row>
          <Col
            xs={12}
            md={6}
            className={`order-md-${imagePosition === "right" ? 2 : 1}`}
          >
            <img
              src={imageUrl}
              alt="computer"
              style={{ width: "80%", height: "auto" }}
            />
          </Col>
          <Col
            xs={12}
            md={6}
            className={`d-flex align-items-center order-md-${
              imagePosition === "right" ? 1 : 2
            }`}
          >
            <div>
              <h1 className="mb-4">{heading}</h1>
              <p className="mb-4">{paragraph}</p>
              <Button
                variant="primary"
                className="text-white mb-3"
                style={{ backgroundColor: "#f28d35", border: "none" }}
              >
                LEARN MORE
              </Button>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
