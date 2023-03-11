import React,{useState} from "react";
import { useDispatch } from "react-redux";
import {addPost} from "../features/postsSlice"
import { nanoid } from "@reduxjs/toolkit";

const AddPost = ()=>{
    const dispatch = useDispatch();

   

    const [title, setTitle] = useState('')

    const [content, setContent] = useState('')

    const textValue =(event)=>{
        setContent(event.target.value)
    }

    const changeInput =(event)=>{
        setTitle(event.target.value)
    }

    const addButton = ()=>{

        if(title && content){
            dispatch(addPost({
                id: nanoid(),
                title,
                content
    
            }))
            console.log(content)
        }
        
    }





    return(
        <section className="d-flex flex-column align-items-center justife-content-center">
            <input className="form-control m-2 w-50 border-success" placeholder="Add Post" onChange={changeInput} value={title}/>
            <textarea className="form-control m-2 w-50 border-success" onChange={textValue} value={content} placeholder="Content..."></textarea>
            <button className="btn btn-success m-2 " onClick={addButton}>Add</button>
        </section>
    )
}

export default AddPost