import React from 'react'
import styled from 'styled-components'
import NetflixTV1 from '../images/NetflixTV1.jpg'
import NetflixTv2 from '../images/NetflixTv2.jpg'
import NetflixTv3 from '../images/NetflixTv3.jpg'
import Button from '../component/Button'
import { generateMedia } from "styled-media-query" 


const tabcomputercontent = () => {
    return (
        <Tabcontent className="container">
            <div className="tab-two-content">
                <span>
                    Watch TV shows and movies anytime,anywhere-personalized for you
                </span>
                <br />
                <Button className="btn">Try it Now</Button>
                
            </div>
            <div className="tab-bottom-content">
                    <div className="tab-bottom-item"> 
                        <img src={NetflixTV1} alt='...' style={{width:'15rem',paddingTop:'3px'}}  />
                        <h3>Watch on your Mobile</h3>
                       <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
</p>
                    </div>
                    <div className="tab-bottom-item">
                       
                    <img src={NetflixTv2} alt='...' style={{width:'15rem',paddingTop:'25px'}} />
                    <h3>Enjoy on your TV.</h3>
                    <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, <br/>Blu-ray players and more.</p>
                    </div>
                    <div className="tab-bottom-item">
                    
                        <img src={NetflixTv3} 
                        alt='...' 
                        style={{width:'15rem',paddingTop:'51px',paddingBottom:'0.62rem'}} 
                        />
                        <h3>Download your shows to watch offline.</h3>
                        <p>Save your favourites easily and always have something to watch.</p>
                    </div>

                </div>
        </Tabcontent>
    )
}

export default tabcomputercontent
//css
const customMedia = generateMedia({
    lgdesktop:'1440px',
    mdDesktop:'1150px',
    tablet: "900px",
    mobile: "740px",
    smMobile: "600px"
  }); 
const Tabcontent = styled.div`
background:var(--main-deep-dark);
.tab-content{
    margin:0 15%;
}
.tab-two-content{
    display:grid;
    grid-template-columns:repeat(12 ,1fr);
    grid-gap:2rem;
    align-item:center;
    margin:5rem 0 0 0 ;
    font-weight: 700;
    font-size: 1.2em;
    text-align: center;
    font-family: 'Raleway', sans-serif;
    ${customMedia.lessThan('mobile')`
    font-size: 1em;
    grid-template-columns:repeat(12 ,1fr);
    grid-gap:2rem;
   `}
    
}
span{
    grid-column:1/8;
    
    ${customMedia.lessThan('mobile')`
    grid-column:1/9;
    font-size:smaller;
    margin-left:70px;
    `
    }
    ${customMedia.lessThan('smMobile')`
    grid-column:1/11;
    font-size:smaller;
    margin-left:32px;
    `
    }}
}
.btn{
    grid-column:11/12;
    margin: -15px 0 0 -11rem;
    ${customMedia.lessThan('mobile')`
    margin: -15px 0 0 -6rem;

    `}
    ${customMedia.lessThan('smMobile')`
    margin: -15px 0 0 -25rem;
    `}
}
.tab-bottom-content
{
    margin:5rem 0 0 0; 
    display:grid;
    grid-template-columns:repeat(3,1fr);
    grid-gap:1rem;
    text-align:center;
    
}
.tab-bottom-item{
    ${customMedia.lessThan('mobile')`
    grid-column:1/-1;
    `}
    ${customMedia.lessThan('smMobile')`
    grid-column:1/-1;
    `}
}
h3{
    margin:0.5rem 0;
}
p{
    text-align:center;
    color:var(--main-gray);
}`;
