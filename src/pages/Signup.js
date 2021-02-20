import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo.jpg'
import { NavLink, Link } from 'react-router-dom'
import { generateMedia } from "styled-media-query"
import Button from '../component/Button'
import Signupfooter from '../component/Signupfooter'
import Headerform from '../component//headerform'
import Validateform from '../component/Validateform'

const Signuppage = () => {
    const { handleChange, values, handleSubmit, errors } = Headerform(Validateform);

    return (
        <Signup>
            <form onSubmit={handleSubmit}>
                <div className="signup-header">
                    <Link to="/">
                        <Logo src={logo} alt="netflix-logo" />
                    </Link>
                    <NavLink to="/login" className="signup-btn">
                        Sign In
                </NavLink>

                </div>
                <div className="signup-content">
                    <Title>
                        STEP <strong>1</strong> OF <strong>3</strong>
                    </Title>
                    <Subtitle>
                        Welcome back!
                     <br />Joining Netflix is easy.
                </Subtitle>
                    <Subtitle2>Enter your password and you'll be watching in no time.<br />
                        <strong>Email</strong>
                        </Subtitle2>


                    <input type="password"
                        value={values.password}
                        name="password"
                        onChange={handleChange}
                        className={errors.password ? 'email-error' : 'EmailInput'} />
                    {errors.password && <p>{errors.password}</p>}

                    <Button className="continue-btn">Continue</Button>


                </div>
            </form>
            <Signupfooter />
        </Signup>
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

const Signup = styled.div`
width: 100%;
height: 100%;
position: relative;
background:#fff;
  ${customMedia.lessThan('mdDesktop')`
 width: fit-content;

 
 `}
 ${customMedia.lessThan('tablet')`
 width: fit-content;
 
 `}
 ${customMedia.lessThan('smMobile')`
 width: fit-content;
 
 `}

.signup-header
 {
     width:100%;
height: 6rem;
border-bottom:1px solid lightgray;
position:relative;
height:10rem;
z-index:1;

}  
.signup-header a:hover{
    text-decoration:underline;
}
.signup-btn{
    right:0;
    margin:1.125rem 3% 0 ;
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
       ${customMedia.lessThan('smMobile')`
       right:53px;
       `}
  
   
}
.signup-content{
    display:grid;
    flex-direction:column;
    justify-content:center;
    align-content:center;
    text-align:left;
    color:var(--main-dark);
    margin: 5rem 0 0 15rem ;
    width:60rem;
    height:30rem;
    position:relative;
    ${customMedia.lessThan('mdDesktop')`
    margin: 5rem 0 0  ;
    `}
  
    ${customMedia.lessThan('tablet')`
    margin: 5rem 0 0 0 ;
    `}
  
    ${customMedia.lessThan('smMobile')`
    margin: 15rem 0 0 0 ;
    `}
}
form input{
    width:25rem;
    height:4rem;
}
form .email-error{
    border-bottom:4px solid #db7302;
}
form p{
    color:#db7203;
    margin:1rem 0 0 0rem;
    ${customMedia.lessThan('smMobile')`
    margin:1rem 0 0 0;
    `}
}

.continue-btn{
    margin:1rem 0 0 0;
    width:25rem;
}
`;
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
`}`;
const Title = styled.h1`
    margin-top:-6rem;
    font-weight:100;
    font-size:large;
    line-height:2.1rem;
    ${customMedia.lessThan('smMobile')`
    font-weight:200;
    line-height:2.1rem;
    font-size:larger;
    margin-top:-5rem;
`}
`;
const Subtitle = styled.h2`
margin:-4rem 0 1.875rem;
font-size:x-large;
line-height:2rem;
padding:0.5rem 0.5rem 0 0;
${customMedia.lessThan('smMobile')`
    font-weight:200;
    font-size:medium;
    margin-top:-1rem;

`}`;
const Subtitle2 = styled.h2`
margin:-2rem 0 1.875rem;
font-weight:100;
font-size:large;
line-height:2rem;
padding:0.5rem 0 0 0;
${customMedia.lessThan('smMobile')`
    font-weight:200;
    font-size:medium;
    margin-top:-1rem;

`}`;
