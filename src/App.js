import Particles from "react-particles"
import {loadFireworksPreset} from "tsparticles-preset-fireworks"
import React, { useState } from "react"
import anime from "./anime.png"
import { Typewriter } from "react-simple-typewriter"
import Countdown from "react-countdown"

  




function App() {

  
 function bataswaktu() {
  const waktu = new Date("January 1, 2024 00:00:00").getTime()
  const waktusekarang = new Date().getTime()
  const waktuberjalan = waktu-waktusekarang
  return waktuberjalan
 }

  const [meesage,newmessage]= useState(["SELAMAT","MERAYAKAN","TAHUN","BARU","2024"])

  const particlesinit = async (engine) => {
    await loadFireworksPreset(engine)
  }

  return (
    
<>
    <Particles
      init = {particlesinit}
      options={{preset:"fireworks"}}
    />

<div className="flex flex-col justify-center items-center min-h-screen ">
    <span className="text-green-300/100 text-4xl font-bold z-50">

<Typewriter words={meesage} 
loop={false}
cursorStyle = {"_"}
cursorColor= "white"
deleteSpeed={70}
cursor

/>

    </span>
    <span className="z-50 mt-3" >
  <img src={anime} alt="anime jpg" height={100} width={100} border="10px solid #00ffff"></img>
  </span>

  
    
  <span className="text-green-300/100 font-bold z-50">

    <Countdown  date= {Date.now()+ bataswaktu() } onComplete={()=>newmessage(["Goodbye 2023 !"])}

      
styleColor={'#00ff00'}
    />

  </span>
</div>


</>

  );
}

export default App;
