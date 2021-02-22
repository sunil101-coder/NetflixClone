import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'

const Headerform=Validateform=>{
    
    const [values,setvalues]=useState({
        email:"",
        password:""
           });
    const [errors,seterror]=useState({});
    const handleChange=event=>{
        const { name, value}=event.target;
        setvalues((preValue) => {
            return{
              ...preValue,
              [name]:value
            };
          
    })
};
    const handleSubmit=(e)=>{
        e.preventDefault();

    if(Validateform(values)){
        seterror(Validateform(values)); 

    }
    else{

            window.location.href="/signup";
          
       
    }
        
    };
      


    
    return {handleChange,values,handleSubmit,errors}  ;
};

export default Headerform