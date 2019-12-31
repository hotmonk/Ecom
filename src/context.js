import React, { Component } from 'react'
import {storeProducts, detailProduct} from './data';

// read about context api
const ProductContext= React.createContext();
//Provider
//Consumer
export default class ProductProvider extends Component {
        state={
            products:storeProducts,
            detailProduct:detailProduct
        }

        getItem=(id)=>{
            const product=this.state.products.find(item=>item.id===id);
            return product;
        }
        handleDetail=(id)=>{
            const product = this.getItem(id);
            this.setState(()=>{
                return {detailProduct:product}
            })
        };
        addToCart=(id)=>{
            console.log(`hello from add to cart.id is ${id}`)
        }

        // tester=()=>{
        //     console.log('State products', this.state.products[0].incart);
        //     console.log('Data products :', this.state.products[0].incart);

        //     const tempProducts = [..this.state.products];
        //     tempProducts[0].incart=true;
        // }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail:this.handleDetail,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer= ProductContext.Consumer;

export{ProductProvider,ProductConsumer};
