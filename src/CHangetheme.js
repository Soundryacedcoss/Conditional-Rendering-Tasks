import React, { useState } from "react";
export default function Changetheme() {
  const [Dark, setDark] = useState();
  const [Light,setLight]=useState();
  const [Party,setParty]=useState();
  const [div,setDiv]=useState();
  const dark=()=>{
    console.log('hiii');
    setDiv
    ({
      backgroundColor:'red'
    });
    setDark({
      backgroundColor:"blue",
      color:"white"
    });
    setLight();
    setParty();
  
}
const party=()=>{
    setDiv({backgroundColor:"#e3ab57"});
    setParty({backgroundColor:"yellow",color:"red"});
    setDark();
    setLight();
}
const light=()=>{
  setDiv({backgroundColor:"gray"});
  setLight({backgroundColor:"wheat",color:"green"});
  setParty();
  setDark();
}
  return (
    <div>
      <div className="theme" style={div} >
        <button className="themebutton" onClick={dark} style={Dark}>Dark</button>
        <button className="themebutton" onClick={party} style={Party}>Party</button>
        <button className="themebutton" onClick={light} style={Light}>Light</button>
      </div>
    </div>
  );
}
