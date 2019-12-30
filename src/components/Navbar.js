import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../homeLogo.svg";
import cartLogo from "../cartLogo.svg";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
export default class Navbar extends Component {
  render() {
    return (
      <nav style={{backgroundColor:'#2a2a72'}} class="navbar navbar-expand-sm  navbar-dark px-sm-5">
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <img src={cartLogo} alt="cart" />
            </span>
            My cart
          </ButtonContainer>
        </Link>
      </nav>
    );
  }
}

