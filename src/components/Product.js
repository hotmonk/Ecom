import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import cartLogo from "../cartLogo.svg";
import {ProductConsumer} from "../context";


export default class Product extends Component {
    render() {
        const {id, title, img, price, inCart}= this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
               <div className="card">
                   <div className="img-container p5" onClick={()=>console.log('clicked')}>
                       <Link to="/details">
                           <img src={img} alt="product" className="card-img-top"/>
                       </Link>
                       <button className="cart-btn" dissabled={inCart?true:false} onClick={()=>{console.log('added to the cart');}}>
                       {inCart?(<p className="text-capitalize mb-0" disabled>{" "}>In Cart</p>):(<img src={cartLogo} alt="cart" />)}
                        </button>
                   </div>
               </div>
            </ProductWrapper>
        )
    }
}

const ProductWrapper= styled.div`
`