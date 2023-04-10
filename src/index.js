import React from "react"
import ReactDOM from "react-dom"
import"./index.css"
function Header(){
    return(
      <header>
        <nav>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" width="40px" height="33px" hspace="5"/>
          <h1 class="reactfacts"> ReactFacts</h1>
          <h2 class="reactcourse" >ReactCourse-Project 1</h2>
        </nav>
      </header>
    
    )
  }
  
  function Maincontent() {
    
  return(
   
     <>
      <div class="maincontent">
        <h1 class="funfacts"><b>Fun facts about React</b></h1>
      <ul>
        <li>Was released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps,including<br></br> mobile apps</li>
        </ul>
      </div>
        </>
          
  )
  } 
  function Footer(){
  return(
  <p> </p>
  )
  }
  function Page(){
   return(  <div>
       <Header/>
    <Maincontent/>
    <Footer/></div>
          )
  }
  ReactDOM.render(<Page/>,document.getElementById("root"))
      
        