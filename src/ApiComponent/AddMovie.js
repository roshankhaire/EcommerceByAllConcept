import React from "react";
import { useRef } from "react";
const AddMovie=(props)=>{
    const titleRef=useRef('')
    const openingTextRef=useRef('')
    const releseDateRef=useRef('')
    const submitHandler=(event)=>{
        event.preventDefault()
        const movie={
            title:titleRef.current.value,
            openingText:openingTextRef.current.value,
            releseDateRef:releseDateRef.current.value

        }
        props.onAddMovie(movie)
    }
 return<form onSubmit={submitHandler}>
    <label htmlFor="title">Title</label>
    <input  type="text" id="title" ref={titleRef}/>
    <label htmlFor="openingText">OpeningText</label>
    <input  type="text" id="openingText" ref={openingTextRef}/>
    <label htmlFor="releaseDate">ReleaseDate</label>
    <input  type="date" id="date" ref={releseDateRef}/>
    <button >AddMovie</button>
 </form>
    
 
}
export default AddMovie