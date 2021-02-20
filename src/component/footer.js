import React, { useState } from 'react'
import styled from 'styled-components'
import { generateMedia } from "styled-media-query"
import { Link } from 'react-router-dom'
import { AiOutlineGlobal } from 'react-icons/ai/index'
import { MdKeyboardArrowDown } from 'react-icons/md/index'
const Footer = () => {
    const [langcontent, setlangcontent] = useState(false);
    const handletoggle = () => {

        setlangcontent({ setlangcontent: !langcontent });
        if (langcontent) {
            setlangcontent(false)
        }

    };
    return (
        <Footercontainer className="container">
            <span>
                Question?Call <Link>7011359101</Link>
            </span>

            <div className="footer-content">
                <ul>
                    <li>
                        <Link>FAQ</Link>
                    </li>
                    <li>
                        <Link>Investor Relations</Link>
                    </li>
                    <li>
                        <Link>Privacy</Link>
                    </li>
                    <li>
                        <Link>Speed Test</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link>Help Centre</Link>
                    </li>
                    <li>
                        <Link>Jobs</Link>
                    </li>
                    <li>
                        <Link>Cookie Preferences</Link>
                    </li>
                    <li>
                        <Link>Legal Notices</Link>

                    </li>

                </ul>
                <ul>
                    <li>
                        <Link>Account</Link>
                    </li>
                    <li>
                        <Link>Ways to Watch</Link>
                    </li>
                    <li>
                        <Link>Corporate Information</Link>
                    </li>
                    <li>
                        <Link>Netflix Originals</Link>
                    </li>
                </ul>
                <ul>

                    <li>
                        <Link>Media Centre</Link>
                    </li>
                    <li>
                        <Link>Terms of UsePrivacy</Link>
                    </li>
                    <li>
                        <Link>Contact Us</Link>
                    </li>
                </ul>
                <div className="lang-btn" >
                    <AiOutlineGlobal size={25} />
                    English&nbsp;
                <MdKeyboardArrowDown size={25} onClick={handletoggle} />
                </div>
            </div>
            {langcontent ?
                <div className="lang-toggle" >
                    <ul>
                        <li>
                            Hindi
                        </li>
                    </ul>
                </div>
                : null
            }
        </Footercontainer>
    )
}

export default Footer

//css
const customMedia = generateMedia({
    lgdesktop: '1440px',
    mdDesktop: '1150px',
    tablet: "900px",
    mobile: "740px",
    smMobile: "600px"
});
const Footercontainer = styled.div`
margin:2rem 0 0 0;
background:var(--main-deep-dark);
Padding-top:10rem;
padding-bottom:3rem;
color:#999;

.footer-content
{
        margin:1.5rem auto 0;
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

  span{
         margin:0 0 0 12.5rem;
         font-size:larger;
         color:#999;
         ${customMedia.lessThan('mdDesktop')`
         margin:0 0 0 3rem;
 
         `}
         ${customMedia.lessThan('smMobile')`
         margin-left:3rem;
        
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
    margin-left:1.58rem;
   
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