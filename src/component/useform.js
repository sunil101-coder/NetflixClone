import {useState,useEffect} from 'react'

const Useform=Validateform=>{
    const [values,setvalues]=useState({
        email:"",
        password:"",
        check:true
    });
    const [errors,seterror]=useState({});
    const handleChange=event=>{
        const { name, value,check}=event.target;
        setvalues((preValue) => {
            return{
              ...preValue,
              [name]:value,check,
              
            };
            
    })
};
    const handleSubmit=(e)=>{
        e.preventDefault();
        seterror(Validateform(values));
    };
    
    return {handleChange,values,handleSubmit,errors} ;
};

export default Useform