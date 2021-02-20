import styled from 'styled-components'


 const Button =styled.button`
align-self:center;
width:200px;
height:54px;
margin:${props=>(props.primary ?'-50px 0 0 0':' -1px 0 0 14.54rem')};
color:#fff;
font-size:17.1px;
letter-spacing:2px;
text-transform:uppercase;
border:none;
  cursor: pointer;
  background:var(--main-red);
  &:hover{
    background:var(--main-deep-red);
   
}


`;
export default Button