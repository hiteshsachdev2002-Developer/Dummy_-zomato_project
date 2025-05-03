import React from 'react';
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

function Button({ type,icon }) {

    const[btnType, setBtnType] = React.useState(type);
    const [iconType, setIconType] = React.useState(icon);
  
   function changeMode() {   

      if(btnType === "Dark") {
       setBtnType("Light");
       setIconType(<MdLightMode/>);
      }
      else {
         setBtnType("Dark");
         setIconType(<MdDarkMode/>);
        }
    }

    return (
        <button className={`btn ${btnType}`}  onClick={changeMode} >
            {btnType} {iconType}
        </button>
    );
}   

export default Button;