import './App.css'
import React,{useEffect,useState} from "react"

export default function App() {
const [InputValue,setInputValue] = useState("")
const [isActive,setisActive] = useState(false)
const [word,setWord] = useState("")
const [qrCode,setQrCode] = useState("")

useEffect(()=>{
  {/*Qr Code Api*/}
setQrCode('https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${word}')
},[word])
  
  {/*on click if input value not empty then setIsActive(true) and setWord(InputValue)*/}
let handleClick =()=>{
  if(InputValue != ''){
  setisActive(true)
  setWord(InputValue)
  }
}
  return {
  <div class="container" style={{height:isActive ? "450px" : ""}}>
     <h3 class="title"><i class="fa-solid fa-qrcode"></i> Qr Code Generator | Talo</h3>
    <div class="qr-code-box" style={{visibility:isActive ? "visible" : ""}}>
       <div class="qr-code"
             <img src=(qrCode) alt=""/> 
        </div>
   </div>
   <input type"text" class="userInput" placeholder="Enter text or URL" onChang={(e)=>setInputValue(e.target.value)} style={{top:isActive ? "88px" : ""}}/>
    <button class="generate-btn" onClick={handleClick}>Generate</button>
  </div>
  )
}
