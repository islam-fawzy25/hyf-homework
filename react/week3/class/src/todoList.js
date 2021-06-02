import React,{useEffect,useState} from 'react'

export const HeaderComponent = ()=>{
    return(
        <h1>Todo List</h1>
    )
}

export const Timer = ()=>{
    const [count , setCount] = useState(0)
    useEffect(()=>{
        setTimeout(() => {
            setCount(prev => prev+1)
        }, 1000);
    })
    return(
<h3>You have used {count} seconds</h3>
    )
}

export default function TodoApp (){
    return(
        <main>
            <HeaderComponent></HeaderComponent>
            <Timer></Timer>
        </main>
    )
}