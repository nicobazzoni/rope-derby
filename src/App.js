import React, { Component } from "react";
import "./styles.css";
import YoutubeEmbed from "./YoutubeEmbed";
import Audio from "./Audio";




export default function App() {
  
  return (
    
    <div  className="App" > 
    
       <div>
        
       <Audio />
      <YoutubeEmbed embedId="6NlnPUnm1IQ?controls=0&showinfo=0&autoplay=1&modestbranding=1&rel=0&mute=1&loop=1&origin" />
      <div class="overlay">
      
      <a href="https://nicorocmusic.com" rel="noreferrer">
           Nicoroc 
            </a>
       <h2> ROPE</h2> 
       <h3> VRIl </h3>
       
       
       
   
       </div>
      </div>
    </div>
  );
}
