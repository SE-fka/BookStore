import React, { useState, useEffect } from "react";
import { useLocation, Link, useHistory } from 'react-router-dom';
import { Container, Typography, Button, Box, Card } from '@material-ui/core';

import useStyles from './styles';

const SearchResult = () => {
  const classes = useStyles();

  let history = useHistory ();
  const location = useLocation();
  const [products, setProduct] = useState([]);
  const query = new URLSearchParams(location.search);
  const result = query.get('title')
  useEffect(() => {
    getSearchData();
    // eslint-disable-next-line
}, []);

const getSearchData = async () => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  try {
    const response = await fetch(`http://localhost:3001/api/book/search?title=${result}`, requestOptions);
    const data = await response.json();
    setProduct(data)
  } catch (error) {
    console.log('error', error);
  }
};

  const cardstyle={display: 'flex', margin: '2%'}

  return (
    <Container>
      <div className={classes.toolbar} />
      <br />
      <Typography className={classes.title} variant="h5" gutterBottom><b>Search result</b></Typography>
      
      <hr/>
   {products.map((product) => (
       
    <Card style={cardstyle}>
    <Box m="1%">
    <img alt={product.title} src={product.image} /> 
    </Box>
    <Box m="3%">
        <div >
        <Typography>
             <h4 style={{color:'blue'}}> <b>{product.title}</b> </h4>
          </Typography>
        </div>
        <div >
        <Typography>
           <p>Author:  <b>{product.writer}</b></p> 
          </Typography>
        </div>
        <div >
        <Typography>
           <p> Catagory: <b>{product.tag}</b> </p> 
          </Typography>
        </div>
        <br />
        <div >
        <Typography>
        <p> price: <b style={{color:'red'}}>$ {product.price} </b></p>
          </Typography> 
        </div>

    </Box>
   </Card>

    )) }
   
    </Container>
  );
};

export default SearchResult;
