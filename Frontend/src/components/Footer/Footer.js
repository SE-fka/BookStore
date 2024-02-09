import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import logo from "../../assets/circles.png";

const Footer = () => {
  return (
    <MDBFooter color="unique-color-dark" className="font-medium pt-4 mt-4">
      <MDBContainer className="text-center text-md-left">
        <MDBRow className="text-center text-md-left mt-3 pb-3">
          <MDBCol md="3" lg="3" xl="4" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              <img src={logo} alt="Book Store App" height="50px" />
              <strong>Book Sore</strong>
            </h6>
            <p>
            An online book store is a web application that allows customers to buy 
            books online. 
            Customers can search for a book by title or author using a web browser, 
            add it to their shopping cart, and then purchase it using a debit or credit card transaction.
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="2" lg="2" xl="2" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              <strong>Products</strong>
            </h6>
            <p>
            Order book
            </p>
            <p>
            &nbsp;Book-IT
            </p>
          </MDBCol>

          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              <strong>Contact</strong>
            </h6>
            <p>
              <i className="fa fa-envelope mr-3" /> &nbsp;UJJWAL@HYPERHIRE.IN
            </p>
            <p>
            <i className='fas fa-map-marker-alt mr-2' />
                <small>&nbsp;Address : Addis Ababa, Ethiopia</small>
            </p>
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow className="d-flex align-items-center">
          <MDBCol md="8" lg="8">
            <p className="text-center text-md-left grey-text">
              &copy; {new Date().getFullYear()} Online Book Store - All Right Reserved.
            </p>
          </MDBCol>
          <MDBCol md="4" lg="4" className="ml-lg-0">
            <div className="text-center text-md-right">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a
                    className="btn-floating btn-sm rgba-white-slight mx-1"
                    href=""
                  >
                    <i className="fab fa-github" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="btn-floating btn-sm rgba-white-slight mx-1"
                    href=""
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="btn-floating btn-sm rgba-white-slight mx-1"
                    href=""
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
};

export default Footer;
