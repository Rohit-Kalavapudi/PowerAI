import React from 'react'
import { useState,useEffect,useRef } from 'react'
import openai from 'openai'
import './Chat.css';
import { api } from './api';
import noteContext from '../context/noteContext';
import { useContext } from 'react';
import Noteitem from './NoteItem';

export const PreviousChat = () => {
    const context = useContext(noteContext)
    
    const { notes,addNote,deleteNote,getNotes,api } = context;
    useEffect(() => {
        getNotes()
        // eslint-disable-next-line
    }, [])
    const ref = useRef(null)
    const refClose = useRef(null)
    const [note, setNote] = useState({id: "", etitle: "", edescription: "", etag: ""})
  
   
  
  
    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
  
      
  return (
    <div className="row-3">
                <h2>Previous Responses</h2>
                <div className="container mx-2"> 
                {notes.length===0 && 'No notes to display'}
                </div>
                {notes.map((note) => {
                    return <Noteitem key={note._id} deleteNode={deleteNote} note={note} />
                })}
    </div>
  )
}
