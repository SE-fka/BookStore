import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Container, Typography, Button, Box, Card } from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import useStyles from './styles';

const Cart = () => {
  const classes = useStyles();

  const [carts, setAddCart] = useState([]);
  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => { 
    try {
      const response = await axios.get('http://localhost:3001/api/book/order/all');
      setAddCart(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteItem = async (order_id) => {
    try {
      await axios.delete(`http://localhost:3001/api/book/order/delete/${order_id}`);
      fetchCart();
    } catch (error) {
      console.log('Error deleting cart:', error);
    }
  };
  const cardstyle={display: 'flex', margin: '2%'}

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h5" gutterBottom><b>Your Shopping Cart</b></Typography>
      <hr/>
      {carts.map((cart) => (
       
    <Card style={cardstyle}>
    <Box m="1%">
    <img alt={cart.title} src={cart.image} /> 
    </Box>
    <Box m="3%">

       <Button
        style={{position: 'absolute', right: '25%', textDecoration: 'none', color:'red'}}
          variant="contained"
          className={classes.button}  
          onClick={() =>  deleteItem(`${cart.order_id}`)}>
          <b> DELETE CART</b>
        </Button>
        <div >
        <Typography>
             <h4 style={{color:'blue'}}> <b>{cart.title}</b> </h4>
          </Typography>
        </div>
        <div >
        <Typography>
           <p>Author:  <b>{cart.writer}</b></p> 
          </Typography>
        </div>
        <div >
        <Typography>
           <p> Catagory: <b>{cart.tag}</b> </p> 
          </Typography>
        </div>
        <br />
        <div >
        <Typography>
        <p> price: <b style={{color:'red'}}>$ {cart.price} </b></p>
          </Typography> 
        </div>

    </Box>
   </Card>

    )) }
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
    </Container>
  );
};

export default Cart;
