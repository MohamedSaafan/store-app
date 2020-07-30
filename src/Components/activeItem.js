import React, { useState } from "react";
import { connect } from "react-redux";
import { addToCart } from "../Redux/Actions/index";
import { getById } from "../api/products";
import { Link } from "react-router-dom";

const ActiveItem = (props) => {
  const [id, setActiveId] = useState({});

  getById(props.match.params.id).then((item) => setActiveId(item));
  return (
    <div>
      <h1>from active Item</h1>
      <div className="card col-4 ">
        <img src={id.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{id.title}</h5>
          <p className="card-text"> price {id.price}.0$</p>
          <button
            className="btn btn-secondary "
            onClick={() => props.addOne(props.match.params.id, id.price)}
          >
            <Link to="/cart"> Add To Cart </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    id: state.activeId,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addOne: (id, price) => dispatch(addToCart(id, 1, price)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ActiveItem);
