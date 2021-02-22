import React from 'react'
import styled from 'styled-components'
import { generateMedia } from "styled-media-query" 
import {Link} from 'react-router-dom'
import {FaFacebookSquare} from 'react-icons/fa/index'
import Loginformhandler from './loginformhandler'
import Loginformvalidation from '../component/loginformvalidation'

const Loginform = () => {
    const {handleChange,values,handleSubmit,errors}=Loginformhandler(Loginformvalidation);
    return (
        <Loginformcontainer>
            <div className="login-form"> 
            <form onSubmit={handleSubmit}>
                <div className="top-content">
                    <Formtitle>Sign In</Formtitle>
                    </div>
                    <div className="form-control">
                        <input type="text"
                         className={errors.email ?'input-error input-empty':'input-empty'    }
                         value={values.email}
                         name="email"
                         onChange={handleChange}
                         placeholder="Email  is required" />
                         {errors.email && <p>{errors.email}</p>}

                        
                    </div>
                    <div className="form-control">
                        <input type="password"
                         className={errors.email ?'input-error input-empty':'input-empty'    }
                         value={values.password}
                         onChange={handleChange}
                          name="password"
                          placeholder=" Password"/>
                        {errors.password && <p>{errors.password}</p>}

                    </div>
                    <div>
                    <SignupButton>Sign In</SignupButton>

                    </div>
                                        
                    <label className="checkbox-container">
                    <input type="checkbox" defaultChecked={values.check}  onChange={handleChange}/>  Remember Me
                      
                        <span className="checkmark">
                        </span>
                        <Link to="/" className="need-help">
                            Need Help?
                        </Link>
                    </label>
                    <div className="form-footer">
                        <FaFacebookSquare size={25} className="fb-icon"/><Link to='/'>Login with facebook</Link>
                        <p className="footer-text">
                            New to Netflix?
                            <Link to='/'>Sign Up Now</Link>
                        </p>
                        </div>
     
                           </form> 
            </div>
        </Loginformcontainer>
    )
}

export default Loginform

const customMedia = generateMedia({
    lgdesktop:'1440px',
    mdDesktop:'1150px',
    tablet: "960px",
    mobile: "740px",
    smMobile: "600px"   
  }); 
  const Loginformcontainer = styled.div`
  
    width:100%;
    height:30rem;
    justify-content:center;
    display:grid;
    align-content:center;
    text-align:center;
    flex-direction:column;
  
    .login-form{
        width:25rem;
        
        height:35rem; 
        z-index:1;
        background: rgba(0,0,0,.75);
    }
    .top-content{
        margin:4rem 0 0 0;
    }
    .form-control{
        display:grid;
        grid-template-columns:0fr;
        margin:1.2rem 0 0 0;
        justify-content:center;
    }
    .form-control p{
        color:#db7203;
        font-size:small
        margin:25px 0 0 0;
    }
    .input-empty{
        width:18rem;
        height:3.5rem;
        background: #333;
        border-radius:0.2rem 0.2rem 0 0; 
        font-size:1.2rem;
        border:none;
        &:focus {
            background-color: #333;
            outline: none;
            color: #ddd;
        }
    }
        .input-error{
            border-bottom:4px solid #db7302;
        }
        form div{
            position:relative;
        }
    
    input:focus{
        outline:none;
        top:-rem;
        positiom:fixed;

    }
    .checkbox-container{
        margin:1rem 0 0 0;
        font-size:1rem;
        position:relative;
        cursor:pointer;  
        color:#999;

        }
        .checkbox-container input{
            display:inline-block;
            width:1.1rem;
            height:1.1rem;
            background:#454545;
            margin:0.9rem 0 0 23px;
            color:#999;
            left:0rem;
            top:0;
        }
        
        .checkbox-container  input:check : input:after{
            content:'';
            position:absolute;
            height:0.625rem;
            width:0.25rem;
            border-left:2px solid #000;
            transform:rotate(-45deg);
            
        }
        .checkbox-container a{
            margin-left:57px;
            text-decoratioin:none;
            color:#999;
        }
        .form-footer{
            margin:1rem 0 0 -5rem;
        }

        .form-footer a{
            color:#999; 
            margin:0 0 0 2rem;
            vertical-align:super;
            
        }
        .fb-icon{
            margin-left:32px;
        }
        .footer-text{
            color:#999;
            margin:0.8rem 0 0 30px;
        } 
        .footer-text a{
            color:#fff;
            margin-left:5px;
            vertical-align:baseline;
        } `;

const Formtitle=styled.h1`
margin-left:-11rem;
color: #fff;
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 28px;
    z-index:1; 
    
}
`;
    
const SignupButton =styled.button`
align-self:center;
width:290px;
height:54px;
color:#fff;
margin:1rem 0 0 0;
font-size:17.1px;
letter-spacing:2px;
text-transform:uppercase;
border:none;
  cursor: pointer;
  background:var(--main-red);
  &:hover{
    background:var(--main-deep-red);
   
}`;
