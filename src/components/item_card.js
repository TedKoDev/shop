import React from "react";
import { Col } from "react-bootstrap";

const ItemCard = (props) => {
  return (
    <Col md>
      <img src={props.shoe.image} width="80%" />
      <h4>{props.shoe.title}</h4>
      <p>
        {props.shoe.content} & {props.shoe.price}
      </p>
    </Col>
  );
};

export default ItemCard;
