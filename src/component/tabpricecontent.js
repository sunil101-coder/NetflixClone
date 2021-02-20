import React from 'react'
import styled from 'styled-components'
import Button from '../component/Button'
import  { ImCross  }  from 'react-icons/im/index'
import { RiCheckFill } from 'react-icons/ri/index'
import { generateMedia } from "styled-media-query"
const tabprrice = () => {
    return (
        <Tabpricecontent className="container">
            <div className="tab-price-content">
                <span>
                    Choose your plan and watch everything on netflix             </span>
                <br />
                <Button className="btn">Start your free trail</Button>
                
            </div>
            <div className="tab-bottom-price">
            <table>
<thead>
  <tr>
    <th></th>
    <th>Basic</th> 
    <th>Standard</th>
    <th>Premium</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>Monthly Price</td>
    <td>$9.5</td>
    <td>$19.5</td>
    <td>$29.5</td>
  </tr>
  <tr>
  <td>Hd Available</td>
    <td><ImCross size={25}/></td>
    <td><RiCheckFill size={25}/></td>
    <td><RiCheckFill size={25}/></td>
  </tr>
  <tr>
  <td>Ultra Hd</td>
    <td><ImCross size={20}/></td>
    <td><ImCross size={20}/></td>
    <td><RiCheckFill size={25}/></td>
  </tr>
  <tr>
  <td>Screen you watch any time</td>
  <td><RiCheckFill size={25}/></td>
    <td><RiCheckFill size={25}/></td>
    <td><RiCheckFill size={25} /></td>
  </tr>
  <tr>
  <td>Watch  on laptop</td>
  <td><RiCheckFill size={25}/></td>
    <td><RiCheckFill size={25}/></td>
    <td><RiCheckFill size={25} /></td>
  </tr>
  <tr>
  <td>Unlimited Movies & Tv Shows</td>
  <td><RiCheckFill size={25}/></td>
    <td><RiCheckFill size={25}/></td>
    <td><RiCheckFill size={25} /></td>
  </tr>
  <tr>
  <td>Cancel anytime</td>
  <td><RiCheckFill size={25}/></td>
    <td><RiCheckFill size={25}/></td>
    <td><RiCheckFill size={25} /></td>
   </tr>
   <tr>
  <td>First month free</td>
  <td><RiCheckFill size={25}/></td>
    <td><RiCheckFill size={25}/></td>
    <td><RiCheckFill size={25} /></td>
   </tr>
  
  </tbody>
</table>


            </div>
            
            
        </Tabpricecontent>
    )
}
export default tabprrice
//css
const customMedia = generateMedia({
  lgdesktop:'1440px',
  mdDesktop:'1150px',
  tablet: "900px",
  mobile: "740px",
  smMobile: "600px"
});
const Tabpricecontent = styled.div`
background:var(--main-deep-dark);
.tab-content{
    margin:0 15%;
}
.tab-price-content{
    display:grid;
    grid-template-columns:repeat(12 ,1fr);
    grid-gap:2rem;
    align-item:center;
    margin:5rem 0 0 0 ;
    font-weight: 700;
    font-size: 1.2em;
    text-align: center;
    font-family: 'Raleway', sans-serif;
    ${customMedia.lessThan('mobile')
    `
    grid-template-columns:repeat(12 ,1fr);
    grid-gap:2rem;
      
    `}
    
}
span{
    grid-column:3/8;
    ${customMedia.lessThan('mdDesktop')
    `
    grid-column:1/9;
    
    `}
    ${customMedia.lessThan('tablet')
    `
    grid-column:1/9;
    font-size:large;

   `}
    ${customMedia.lessThan('mobile')
    `
    grid-column:3/11;
    font-size:smaller;

   `}
    ${customMedia.lessThan('smMobile')
    `
    grid-column:2/12;
    font-size:smaller;
 
   `}
}
.btn{
    grid-column:9/12;
    margin: -15px 0 0 -9rem;
    width:20rem;
    ${customMedia.lessThan('mdDesktop')
    `grid-column:11/12;
    `}
    ${customMedia.lessThan('mobile')
    `grid-column:4/12;
    margin: -15px 0 0 0;

    `}
    ${customMedia.lessThan('smMobile')
    `
    grid-column:2/8;
    margin:0 0 0 rem;
    font-size:smaller;

   `}
}

//tab-bootom-pricelist
.tab-bottom-price{
  margin:1.5rem  0 0 4rem;
  
}
table{
  width:50rem;
  justifycontent:center;
  align-content:center;
  margin:2.5rem 0 0 1rem;;
  border-collapse:collapse;
  transform:translate(45%,-5%);
  ${customMedia.lessThan('mdDesktop')
  `transform:translate(34%,-5%);
  width:40rem;
  font-weight:bold;
  font-size:large;


  `}
  ${customMedia.lessThan('tablet')
  `transform:translate(10%,-5%);
  width:40rem;
  font-weight:bold;
  font-size:large;
  margin-left:9px

  `}
 
   ${customMedia.lessThan('mobile')
    `transform:translate(10%,-5%);
    width:37rem;
    font-weight:bold;
    font-size:small;

    `}
    ${customMedia.lessThan('smMobile')
    `transform:translate(10%,-5%);
    width:30rem;
    font-weight:bold;
    font-size:small;

   `}
   

}
table thead th{
  text-transform:uppercase;
  padding:0.8rem;
}
table tbody{
  display:table-row-group;
  vertical-align:middle;
  border-color:inherit;
}
table tbody tr td{
  padding:1rem;
  text-align:center;
  color:#999;
  
}
tr:nth-child(even) {
  background-color: #dddddd;
  color:#999;
  
}

`;