import React, {useState,useEffect}from 'react'
import styled from 'styled-components'
import { generateMedia } from "styled-media-query" 
import Repair from  '../images/Repair.jpg'
import Button from '../component/Button'
const Tabdoorcontent = () => {
      
    const [scrollPosition, setSrollPosition] = useState(0);
    const handleScroll = () => {
    const position = window.pageYOffset;
    console.log('scroll')
    setSrollPosition(position);
};

useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

    
    return (
        <Tabcontent className="container">
            <div className="tab-content">
                <span id="tab-text">
                    If you don't decide netflix isn't for you-no
                    <br/>problem.No commitment. Cancel<br/> online anytime
                </span>
                <br/>
                <Button onClick={handleScroll}  >Try it Now</Button>
                <Image src={Repair} alt="..." style={{color:'white'}}/>
            </div>

            </Tabcontent>
    )
}

export default Tabdoorcontent
//css
const customMedia = generateMedia({
    lgdesktop:'1440px',
    mdDesktop:'1150px',
    tablet: "900px",
    mobile: "740px",
    smMobile: "600px"
  }); 
//media
const Tabcontent=styled.div`
background:var(--main-deep-dark);

.tab-content{
    display:grid;
    grid-template-columns:repeat(2 ,1fr);
    grid-gap:2rem;
    align-item:center;
    margin:5rem 0 0 0 ;
    font-weight: 700;
    font-size: 1.2em;
    text-align: center;
    font-family: 'Raleway', sans-serif;
    ${customMedia.lessThan('tablet')`
        font-size:1rem;
        grid-template-columns:100%;
        padding-left:0px;
    `
    }    
    
}
#tab-text{
    justify-content:left;
    margin-top:3rem;
    line-spaceing:1rem;
}`;
const Image=styled.img`
right:0;
width:14rem;
justify-content:center;
height:300px;
margin:-130px 0 0 5.234rem;
${customMedia.lessThan('tablet')`
margin:0px 0 0 14.434rem;
`}
${customMedia.lessThan('smMobile')`
margin:0px 0 0 6.434rem;
`}
`;