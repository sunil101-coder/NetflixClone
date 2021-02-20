import React, { useState } from 'react'
import styled from 'styled-components'
import { generateMedia } from "styled-media-query"
import { Link } from 'react-router-dom'

const SignupFooter = () => {
    return (
        <Footercontainer className="container">
            <div className="question">
            Question?Call <Link>7011359101</Link>

            </div>
                
            <div className="footer-content">
            <ul>
                    <li>
                        <Link to="/">Faq</Link>
                    </li>
            </ul>
                <ul>
                    <li>
                        <Link to="/">Gift Card</Link>
                    </li>

                </ul>
                <ul>
                    <li>
                        <Link to="/">Terms of Use</Link>
                    </li>

                </ul>
                <ul>

                    <li>
                        <Link to="/">Privacy Statement</Link>
                    </li>

                </ul>
            </div>
        </Footercontainer>
    )



}

export default SignupFooter

//css
const customMedia = generateMedia({
    lgdesktop: '1440px',
    mdDesktop: '1150px',
    tablet: "900px",
    mobile: "740px",
    smMobile: "600px"
});
const Footercontainer = styled.div`
margin:3.5rem auto 0;
       
background:rgba(243, 241, 239, 1);
padding-bottom:3rem;
color:#999;
z-index:5;
position:relative;

${customMedia.lessThan('smMobile')`
margin:29rem 0 0 0;
`
}

.footer-content
{
        margin:.5rem auto 0;
        width:70%;
        display:grid;
        grid-template-columns:repeat(4,1fr);
        grid-gap:1rem;
        overflow:auto;
        font-size:0.8rem;        
        align-content:center;
        ${customMedia.lessThan('mdDesktop')`
        grid-template-columns:repeat(4,1fr);
        width:auto;
  
          `}
      
        ${customMedia.lessThan('smMobile')`
        grid-template-columns:repeat(2,1fr);
        width:max-content;
        `
    }
    }

  .question{
         margin:0 0 0 12.5rem;
         padding:25px 0 0 0;
         font-size:larger;
         color:#999;
         ${customMedia.lessThan('mdDesktop')`
         margin:0 0 0 3rem;
 
         `}
         ${customMedia.lessThan('smMobile')`
         margin-left:9rem;
        
           `}
      }
ul li{
    list-style:none;
    padding:8px 8px 8px 8px;
    grid-column:10/12;
    ${customMedia.lessThan('smMobile')`
    grid-template-columns:repeat(2,1fr);
      `}

        
}
a{
        color:#999;

}
a:hover{
    text-decoration:none;
    cursor:pointer;
}
.lang-btn{
    background:transparent;
    border:0.9px solid #333;
    padding:1rem;
    width:10rem;
    margin-left:1.5rem;
    display:grid;
    grid-template-columns:repeat(3,1fr);
    justify-content:center;
    align-items:center;
}
.lang-toggle{
    display:grid;
    grid-template-columns:repeat(1,1fr);    
    margin-left:15.58rem;
    position:absolute;
    ${customMedia.lessThan('mdDesktop')`
    margin-left:1.48rem;
   
    `}
    ${customMedia.lessThan('smMobile')`
    margin-left:6.4rem;
   
    `}
}
.lang-toggle ul{
    background:var(--main-deep-dark);
    width:10rem; 
    border:0.9px solid #333;
    align-items:center;
    
}
.lang-toggle ul li{
    text-align:center;
    margin-left:-46px;
    &:hover{
        background:#0085ff;
        color:#fff; 
    }
}
`;
