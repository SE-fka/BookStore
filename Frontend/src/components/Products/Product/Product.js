import React, { useState, useEffect } from "react";
import axios from 'axios';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  CardActionArea,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import { ToastContainer, toast } from 'react-toastify';

const Product = ({ product }) => {
  const [addCart, setAddCart] = useState([]);
  const [getCart, setFechCart] = useState([]);


  const fetchCart = async (book_id) => { 
    try {
      const { data } = await axios.get(`http://localhost:3001/api/book/${book_id}`);
      setFechCart(data);
  
      await fetch('http://localhost:3001/api/book/order/add', {
        method: 'POST',
        body: JSON.stringify({
          title: data.title,
          writer: data.writer,
          image: data.image,
          price: data.price,
          tag: data.tag,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((responseData) => {
          setAddCart((data) => [responseData, ...data]);
        })
        .catch((err) => {
          console.log(err.message);
        });
    } catch (error) {
      console.log(error);
    }

  };
  
  const classes = useStyles();
  return (
    <>
    <Card className={classes.root}>
      <Link to={`product-view/${product.book_id}`}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={product.image}
            title={product.title}
          />
        </CardActionArea>
      </Link>
      <CardContent>
        <div className={classes.cardContent}>
          <p className={classes.cardContentName} style={{color: 'blue'}}> 
          {product.title}</p>
        </div>
        <div className={classes.cardContent}>
        <Typography>
            Author: <b> {product.writer} </b>
          </Typography>
        </div>
        <div className={classes.cardContent}>
        <Typography>
            Catagory: <b>{product.tag}</b>
          </Typography>
        </div>
        <div className={classes.cardContent}>
          <p className={classes.cardContentPrice}>
            <b>$ {product.price}</b>
          </p>
        </div>
       
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <Button
          variant="contained"
          className={classes.button}
          endIcon={<AddShoppingCart />}
        onClick={() => fetchCart(`${product.book_id}`)} 
        >
          <b>ADD TO CART</b>
        </Button>
      </CardActions>
    </Card>

    <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
     pauseOnHover
     theme="light" />
    <ToastContainer />
    </>
  );
};

export default Product;
