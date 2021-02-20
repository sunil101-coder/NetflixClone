import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo.jpg'
import { generateMedia } from "styled-media-query" 
import Loginform from '../component/loginform'
import Loginfooter from '../component/LoginFooter'

const Login = () => {
    return (
        <Mainheader className="main-container">
            <div className="login-header-top">
                <Logo src={logo} alt="netflix-logo" />
                  </div>
                  <div className="login-header-content">
                    <Loginform/>
                    <Loginfooter/>
                    </div>
        </Mainheader>
    )
}

export default Login
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
{
    width:250px;
    margin:25px 0 0 145px; 
    top:25%;
    position:absolute;
    transform:translate(-50%,-50%);
    ${customMedia.lessThan('smMobile')`
    width:150px;
    left:-12%;
    
`}
`;

const Mainheader = styled.div`
.login-header-top{
    position:relative;
        height:10rem;
        z-index:1;
}
${customMedia.lessThan('smMobile')`
width:100vh;
height:100%;
`}
`;
