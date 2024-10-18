import { useState } from "react";
export default function Ludo(){
let [color,setred]=useState({red:0,green:0,yellow:0,blue:0})
let changered=()=>{
    setred((color=>{
       color.red=color.red+1
       console.log(color);
        return {...color}
    }))
};
return(
    <div>
        <p> Red player:{color.red}</p>
        <button onClick={changered}style={{backgroundColor:"red"}}>+1</button>
    </div>
)
}