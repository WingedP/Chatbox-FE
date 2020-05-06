import React,{useState,useEffect,useRef} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';

import socketIOClient from "socket.io-client";
const moment = require('moment');

// const socket = socketIOClient("http://localhost:5000");
const socket = socketIOClient("https://wingedpchatbox-be.herokuapp.com/");



function App() {
const [chat,setChat]=useState("");
const [chatLog,setChatLog]=useState([]);
const [name,setName]=useState([]);
const chatLogRef=useRef(chatLog)

useEffect(()=>{
const user=prompt("please enter your name")
setName(user)
chatConnection(chatLog) },[])

const chatConnection = ( ) =>{
  socket.on("messages",(msg)=>{
    chatLogRef.current.push(msg)
    setChatLog([...chatLogRef.current])
  })
  };

const handleChange=(e)=>{  setChat(e.target.value)}

const submitChat=(e)=>{
    e.preventDefault()
    const now = new Date() 
    const unixTimeStamp = now.getTime() 
    let chatObj={
      text:chat,
      name:name,
      createdAt:moment(unixTimeStamp).format('LLLL')
    };

    socket.emit("chat",chatObj, err=>{
      if(err) {
      console.log(err)}
      else { console.log("message has been sent") }
    })
    setChat("")
  }

  console.log("chatLog:",chatLog)


  return (
  <div className="App">
<Navbar/>

<div className="wrapper">

<Sidebar username={name} chatLog={chatLog}/>

<div className="chatWrapper">

<div className="chatbox">
<form  onChange={handleChange} onSubmit={submitChat}  >
  <input className="chatboxInput" name="chat" type="text" placeholder="How are you feeling today?"></input>
  <button className="ripple" type="submit">Chat</button>
</form> 
</div>

<div className="chat-log">
  {chatLog.map(el=> {
  return (
    <div className="chat-logItem">
  <div className="createdAt">at {el.createdAt}</div>
  <p><strong className="userhere"> {el.name} : </strong>{el.text}</p>
  </div>
  )

})}   
</div>
</div>

</div>
  </div>
  );
}

export default App;
