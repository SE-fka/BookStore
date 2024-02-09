import React, {useEffect, useState} from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { useHistory, Link } from "react-router-dom";
import logo from "../../assets/circles.png";
import useStyles from "./styles";
import { FaSearch } from "react-icons/fa";
import inputstyle from "../../style/style.css";


const Navbar = ({ totalItems }) => {

  const classes = useStyles();
  let history = useHistory ();
  const [input, setInput] = useState("");


const handleSearch = async () => {
  history.push(`/search/?title=${input}`)
};

const handleSubmit = (event) => {
  event.preventDefault();
  
  handleSearch(); 

  setInput('');
};

  return (
    <div>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h5"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logo}
              alt="Book Store "
              height="50px"
              className={classes.image}
            />
            <div>BOOK Store</div>
          </Typography>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Search here.." style={inputstyle} required
             value={input} onChange={(e) => setInput(e.target.value)}/>
          <button type="submit">
            <FaSearch />
          </button>
        </form>

          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton
              component={Link}
              to="/cart"
              aria-label="Show cart items"
              color="inherit"
            >
              <Badge badgeContent={totalItems} color="secondary" >
                <ShoppingCart/>
                <p style={{fontSize:'15px'}}>View</p>
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
