import React from "react";
import { useNavigate } from "react-router-dom";

const Button = (props, styles) => {
  const { title,press } = props
  
  return (
    <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
      onClick={press}
    >
      {title}
    </button>
  )
}



export default Button;