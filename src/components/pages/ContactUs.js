import React from "react";
import { useRef } from "react";
const ContactUs=(props)=>{
    const nameRef=useRef('')
    const emailRef=useRef('')
    const contactUsRef=useRef('')
    const submitHandler=(event)=>{
        event.preventDefault()
        const userData={
            name:nameRef.current.value,
            email:emailRef.current.value,
            contactUs:contactUsRef.current.value

        }
        props. onAddUserData(userData)
    }
 return<form onSubmit={submitHandler}>
    <label htmlFor="name">Name</label>
    <input  type="text" id="name" ref={nameRef}/><br/>
    <label htmlFor="email">Email</label>
    <input  type="text" id="email" ref={emailRef}/><br/>
    <label htmlFor="contactUs">ContactUs</label>
    <textarea type="contactUs" id="contactUs" ref={contactUsRef}></textarea><br/>
    <button >Submit</button>
 </form>
    
 
}
export default ContactUs