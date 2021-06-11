import logo from './logo.svg';
import './App.css';
import React ,{useState,useEffect} from 'react'

const ShiftComponent = ({children})=>{
  const [input,setInput] = useState('')
  const [startTime,setStartTime] = useState(0)
  const [endTime,setEndTime] = useState(0)

console.log();
  return(
    <form onSubmit={input}>
    <label>
      Name:
      <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}} />
    </label><br/>
    <label>
Start Date:
      <input type="text" value={startTime} onChange={(e)=>{setStartTime(e.target.value)}} />
    </label>
    <label><br/>
   End Date:
      <input type="text" value={endTime} onChange={(e)=>{setEndTime(e.target.value)}} />
    </label>
    <button onClick={()=>{}} value="Submit" >Click</button>
  </form>
  )
}

const FormComponent =()=>{
  return(
    <div>
heloo

    </div>
  )
}

  function App() {


    
    return (
    <div>
      <FormComponent>
      </FormComponent>
      <ShiftComponent ></ShiftComponent>
    </div>
    )
    }
    

