import React, { useState, useRef } from "react";
import { Grid, InputAdornment, Input } from "@material-ui/core";
import Product from "./Product/Product.js";
import useStyles from "./styles";
import "../ProductView/style.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  const [searchTerm, setSearchTerm] = useState("");

  const sectionRef = useRef(null);

  const handleInputClick = () => {
    // Scrolls to the section when the input is clicked
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className={classes.mainPage}>
{/*       <div className={classes.toolbar} /> */}
      
      <div>
        {searchTerm === "" && (
          <>
            <h1 className={classes.booksHeader}>
              Discover <span style={{ color: "#f1361d" }}>Books</span>
            </h1>
            <h3 className={classes.booksDesc}>
              Explore our comprehensive collection of books.
            </h3>
          </>
        )}
   
        <Grid
          className={classes.content}
          container
          justify="center"
          spacing={2}
        >
          {products
            .map((product) => (
              <Grid
                className={classes.content}
                item
                xs={6}
                sm={6}
                md={4}
                lg={3}
                id="pro"
              >
                <Product product={product} onAddToCart={onAddToCart} />
              </Grid>
            ))}
        </Grid>
      </div>
      
    </main>
  );
};

export default Products;
