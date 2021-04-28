import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Product from "../components/Product";
import { listProducts } from "../store/actions/product/ListproductAction";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((prod) => (
            <Col key={prod._id} sm={6} md={6} lg={4} xl={3}>
              <Product product={prod} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
