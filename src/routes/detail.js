import React from "react";
import { useParams } from "react-router-dom";

function Detail(props) {
  let { id } = useParams(); // useParams()는 객체를 반환한다. useParams란 url의 파라미터를 가져오는 hook이다.

  console.log(id);

  let 찾은상품 = props.shoes.find(function (x) {
    return x.id == id;
  });
  console.log(찾은상품);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={찾은상품.image} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
