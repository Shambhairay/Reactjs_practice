import {useState} from 'react'

function State() {
  const [value,setValue]= useState("")
  const inputHandel=(event)=>{
    // console.log(event.target.value);
    setValue(event.target.value)
  }
  return (
    <>
    <h1 style={{backgroundColor:value}}>INPUT HANDALING</h1>
     <div>
    
    <label htmlFor="">UserName</label>
    <input type="text" onChange={inputHandel}/>
      
    </div>
    <h2>
      {value}
    </h2>
    {!value && <h1>Write a color name to change the backgroundColor</h1>}

    </>
   
  )
}

export default State
