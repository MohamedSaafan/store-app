import React, { useState, useEffect } from "react";
import { getById } from "../api/products";
import { removeFromCart } from "../Redux/Actions/index";
import { connect } from "react-redux";

const CartItem = (props) => {
  const { id, numberOfItems } = props;
  const [item, setItem] = useState(null);
  useEffect(() => {
    getById(id).then((item) => setItem(item));
  });
  const renderTheItem = () => {
    if (!item) {
      return <h1> you havn't any products yet</h1>;
    }
    const itemTotalPrice = item.price * numberOfItems;

    return (
      <div className="card col-4 ">
        <h1> the number of Items is {numberOfItems}</h1>
        <img src={item.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">
            {" "}
            the total price for the number of items is: {itemTotalPrice}.0$
          </p>
          <button
            className="btn btn-primary"
            onClick={() => props.removeFromCart(id, item.price)}
          >
            delete
          </button>
        </div>
      </div>
    );
  };
  return <div>{renderTheItem()}</div>;
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id, price) => dispatch(removeFromCart(id, price)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
