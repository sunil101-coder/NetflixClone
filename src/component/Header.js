import React,{useState} from 'react'
import logo from '../images/logo.jpg'
import { NavLink ,Link } from 'react-router-dom'
import  Button  from '../component/Button'
import styled from 'styled-components'
import { generateMedia } from "styled-media-query" 
import Headerform from './headerform'
import Validateform from './Validateform'

const Header = () => {
    const {handleChange,values,handleSubmit,errors}=Headerform(Validateform);
      
    return (
        <Headercomponent className="header-container">
            <div className="header-top">
            <NavLink to="/"><Logo src={logo} alt="netflix-logo" /></NavLink>
                <NavLink to="/login" className="signup-btn">
                    Sign Up
                </NavLink>
            </div>
            <div className="header-content">
                <Title>
                    Unlimited movies, TV shows and more.
                </Title>
                <Subtitle>
                    Watch anywhere. Cancel anytime.
                <br />
                    <br />
                Ready to watch?
                <br />
                    <br />
                 Enter your email to create or restart your membership.

                </Subtitle>
                <form  onSubmit={handleSubmit} >
                    <label>
                    <EmailInput type="text"
                     placeholder="Email Address"
                      value={values.email} 
                      name="email"
                     onChange={handleChange}
                     className={errors.email ?'email-error':'EmailInput'} />
                    </label>
                    <Button className="titlebtn"  primary >

                                             
                    <span id="span-text">
                    Get Started    &#10140;
                        </span>
                    </Button>
                    
                    {errors.email && <p>{errors.email}</p>}

                </form>



            </div>

        </Headercomponent>

    )
}

export default Header
//css
 const customMedia = generateMedia({
    lgdesktop:'1440px',
    mdDesktop:'1150px',
    tablet: "960px",
    mobile: "740px",
    smMobile: "600px"
  }); 
//logo  
const Logo = styled.img`
width:250px;
margin:25px 0 0 145px; 
top:25%;
position:absolute;
transform:translate(-50%,-50%);
${customMedia.lessThan('smMobile')`
width:150px;
left:-12%;
`

}`

//headercomponent
const Headercomponent = styled.div`
width:100%;

${customMedia.lessThan('mdDesktop')`
width:100%;
height:109vh;
`}
${customMedia.lessThan('tablet')`
width:100%;
height:41rem;
`}

${customMedia.lessThan('smMobile')`
width:50rem;
height:41rem;
`}
form .email-error{
    border-bottom:4px solid #db7302;

}
form p{

    color:#db7203;
    margin:1rem 0 0-15rem;
    ${customMedia.lessThan('smMobile')`
    margin:1rem 0 0 0;

    `}

}

.signup-btn{
     right:0;
     margin:3.125rem 3% 0 ;
     padding:0.4735rem 1.0625rem;
     font-weight:400;
     font-size:1rem;
     line-height:normal;
     position:absolute;
     cursor:pointer;
     translate:transform(-50%,-50%);
    background:var(--main-red);
    transition:background 0.2s ease-in;
    border-radius:0.1875rem;
    color:#fff;
    &:hover{
        background:var(--main-deep-red);
        }
        ${customMedia.lessThan('smMobile')`
        right:53px;
        `}
   
    
}
//header-top
.header-top{
    position:relative;
        height:10rem;
        z-index:1;
}
//header-content
.header-content
{
    z-index:1;
    width:100%;
    position:relative;
    margin:4.5rem 0 0;
    display:flex;
    justify-content:center;
    align-content:center;
    text-align:center;
    flex-direction:column;
    ${customMedia.lessThan('smMobile')`
        margin:8.5rem 0 0 0;
        `}
}
.titlebtn
{
    border:none;
    outline:none;
    border-radius:0.235rem;
    ${customMedia.lessThan('smMobile')`
    margin:7px 0 0 0;
    `}

}
#span-text
{
    height: .75em;
    width: .35em;
}
`;
//content
const Title = styled.h1`

    color:#fff;
    text-align:center;
    margin:0 0 1.2rem;
    font-size:700;
    line-height:2.1rem;
    ${customMedia.lessThan('smMobile')`
    font-weight:200;
    line-height:2.1rem;
    font-size:larger;
    margin-top:-5rem;
`}


`;
const Subtitle = styled.h2`
color:#fff;
text-align:center;
margin:1px 0 1.875rem;
font-weight:400;
font-size:1rem;
line-height:1.25rem;
padding:10px 0 0 0;
${customMedia.lessThan('smMobile')`
    font-weight:200;
    font-size:medium;
    margin-top:-1rem;

`}
`;

const EmailInput = styled.input`
width:350px;
height:56px;
margin:10px 0 0 0;
padding:10px 5px;
border:1px solid lightblue;
justify-content:center;
border-radius:1.011rem;
border:1px solid #db7203;
outline:none;
${customMedia.lessThan('smMobile')`
        width:350px;
        height:56px;
        
`}
`;
