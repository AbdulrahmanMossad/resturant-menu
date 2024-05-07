import React from "react";
import { Col, Card, Row } from "react-bootstrap";
const ItemList = ({ itemsData }) => {
  return (
    <Row className="">
      {itemsData.length > 0 ? (
        itemsData.map((item) => {
          return (
            <Col sm="12" className="mb-3" key={item.id}>
              <Card
                className="d-flex flex-row"
                style={{ backgroundColor: "#f8f8f8" }}
              >
                <Card.Img
                  variant="top"
                  src={item.imgUrl}
                  className="img-item"
                />
                <Card.Body>
                  <Card.Title className="d-flex justify-content-between">
                    <div className="item-title ">{item.title}</div>
                    <div className="item-price">{item.price}</div>
                  </Card.Title>

                  <Card.Text className="item-description">
                    <div className="py-2">{item.description}</div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })
      ) : (
        <h3 className="text-center">لا يوجد اصناف</h3>
      )}
    </Row>
  );
};

export default ItemList;
