import React from "react";
import axios from 'axios';
import { Container, Grid, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./style.css";

const createMarkup = (text) => {
  return { __html: text };
};

const ProductView = () => {
  const [product, setProduct] = useState([]);

  const fetchProduct = async (book_id) => {
    const response = await axios.get(`http://localhost:3001/api/book/${book_id}`);
    setProduct(response.data);

  };

  useEffect(() => {
    const id = window.location.pathname.split("/");
    fetchProduct(id[2]);
  }, []);

  return (
    <Container className="product-view">

      <Grid container>
        <Grid item xs={12} md={6} className="image-wrapper">
          <img src={product.image} alt={product.title} />
        </Grid>
        <Grid item xs={12} md={5} className="text">
          <Typography variant="h2">
            <b>{product.title}</b>
          </Typography>
          
          <Typography variant="h3" color="secondary">
            Author: <b> {product.writer} </b>
          </Typography>
          <br />
          <Typography variant="h3" color="secondary">
            Price: <b> ${product.price} </b>
          </Typography>
          <br />
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Button
                size="large"
                className="custom-button"
                component={Link}
                to="/"
              >
                Continue Shopping
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
     
    </Container>
  );
};

export default ProductView;
