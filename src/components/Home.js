import React from 'react'
import examl from "../images/studlogo.jpg"

function Home() {
    return (
        
           <div className="App">
      <h1 className="wel">Welcome</h1>

      <h3 className="custom">Online Examination portal</h3>
    
     <img src={examl} className="exam" alt="exam"/>
    </div> 
        
    )
}

export default Home
