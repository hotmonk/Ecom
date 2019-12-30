import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import logo from '../homeLogo.svg'
import cartLogo from '../cartLogo.svg'
import styled from 'styled-components'
export default class Navbar extends Component{
    render(){
        return(
            <nav class="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
                <Link to='/'>
                    <img src={logo} alt="store" classNamw="navbar-brand"/>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            Products
                        </Link>
                    </li>
                </ul>
                <Link to='/cart' className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            <img src={cartLogo} alt="cart"/>
                        </span>
                    My cart
                    </ButtonContainer>
                </Link>
            </nav>
        )
    }
}

const ButtonContainer= styled.button`
text-transform: capitalize;
font-size:1.4rem;
background: transparent;
border:0.05rem solid var(--lightBlue);
color:var(--lightBue);
border-radius:0.5rem;
padding: 0.2rem 0.5rem 0.2rem 0;
cursor:pointer;
transition:all 0.5s ease-in-out;
&:hover{
    background:var(--lightBlue);
    color:var(--mainBlue);
}
&:focus{
    outline: none;
}
`;