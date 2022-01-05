import React, { Component } from "react";
import "./styles.css";
import YoutubeEmbed from "./YoutubeEmbed";
import Audio from "./Audio";




export default function App() {
  
  return (
    
    <div  className="App" > 
    
       <div>
        
       
      <YoutubeEmbed embedId="6NlnPUnm1IQ?controls=0&showinfo=0&autoplay=1&modestbranding=1&rel=0&mute=1&loop=1&origin" />
      <div className="overlay">
      <Audio />
      <a href="https://nicorocmusic.com" rel="noreferrer">
          <h1>n i c o r o c </h1> 
            </a>
       <h2> r o p e</h2> 
       <h3> v r i l </h3>
       
       
       
   
       </div>
      </div>
    </div>
  );
}
