import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo.jpg'
import { NavLink,Link } from 'react-router-dom'
import { generateMedia } from "styled-media-query"
import Button from '../component/Button'
import {FcCheckmark} from 'react-icons/fc/index'
import Checkmark from '../images/Checkmark.png'
import Signupfooter from "../component/Signupfooter";
const Signuppage = () => {

    return (
        <Chooseplan>
            <form>
                <div className="chooseplan-header">
                <NavLink to="/"><Logo src={logo} alt="netflix-logo" /></NavLink>
                    <NavLink to="/login" className="signup-btn">
                        Sign In
                </NavLink>

                </div>
                <div className="chooseplan-top-content">
                    <img src={Checkmark} alt="checkright" className="Checkmark"/>
                    <Title>
                        STEP <strong>2</strong> OF <strong>3</strong>
                    </Title>
                    <Subtitle>
                        Choose your Plan
                </Subtitle>
                <div className="checklist">
                        <div className="bullet"><FcCheckmark size={25} />No Commitment Cancel Anytime</div>
                        <div className="bullet"><FcCheckmark size={25}/>Everything on Netflix for one low price</div>
                        <div className="bullet"><FcCheckmark size={25}/>No Add  and extra fees ever</div>

                    <Button className="continue-btn">See The Plans</Button>
                    
                    
                    </div>
                </div>
            </form>
            <Signupfooter/>
        </Chooseplan>
    )
}

export default Signuppage
const customMedia = generateMedia({
    lgdesktop: '1440px',
    mdDesktop: '1150px',
    tablet: "960px",
    mobile: "740px",
    smMobile: "600px"
});

const Chooseplan = styled.div`
background:#fff;
width: 100%;
height:100%;
position: relative;
  ${customMedia.lessThan('mdDesktop')`
 width:auto;
 `}
 ${customMedia.lessThan('tablet')`
 width: fit-content;
 height: 45.0625rem;
 
 `}
 ${customMedia.lessThan('smMobile')`
 width: fit-content;
 height: 113rem;
 
 `}
.chooseplan-header
 {

border-bottom:1px solid lightgray;
position:relative;
height:10rem;
z-index:1;

 
}  
.chooseplan-header a:hover{
    text-decoration:underline;
}
.signup-btn{
    right:0;
    margin:2.125rem 3% 0 ;
    padding:0.4735rem 1.0625rem;
    font-weight:200;
    font-size:2rem;
    line-height:normal;
    position:absolute;
    cursor:pointer;
    translate:transform(-50%,-50%);
   background:white;
   transition:background 0.2s ease-in;
   border-radius:0.1875rem;
   color:#000;
   &:hover{
       list-style:underline;
       }
      
  
      
   
}
.chooseplan-top-content{
    width:100%;
    display:grid;
    flex-direction:column;
    justify-content:center;
    align-content:center;
    text-align:left;
    color:var(--main-dark);
    margin: 2rem 0 0 15rem ;
    width:60rem;
    
    position:relative;
    
    ${customMedia.lessThan('mdDesktop')`
    margin: 6rem 0 0 0 ; 
    `}

    ${customMedia.lessThan('smMobile')`
    margin: 15rem 0 0 0 ;
    
    `}

}
.Checkmark{
    width:100px;
    margin:0 0 0 9rem;
}
.continue-btn{
    margin:1rem 0 0 0;
    width:25rem;
}
.checklist{
    vertical-align:middle;
}
.bullet{
    line-height:1rem;
    margin:15px 0 0 0;
}

`
    ;
const Logo = styled.img`
width:250px;
margin:25px 0 0 145px; 
top:23%;
position:absolute;
transform:translate(-50%,-50%);
${customMedia.lessThan('smMobile')`
width:150px;
left:-2%;
top:2rem;
`
}`
const Title = styled.h1`

    text-align:center;    
    font-weight:100;
    font-size:large;
    line-height:2.1rem;
    ${customMedia.lessThan('smMobile')`
    font-weight:200;
    line-height:2.1rem;
    font-size:larger;
`}
`;
const Subtitle = styled.h2`
text-align:center;
margin:0 0 1.875rem;
font-size:large;
line-height:2rem;
padding:0.5rem 0.5rem 0 0;
${customMedia.lessThan('smMobile')`
    font-weight:200;
    font-size:medium;
`}
`;
