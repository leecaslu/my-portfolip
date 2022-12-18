import React from "react"


export default function Header(props){
  return(
    <li className={"nav"}>
      {props.texto}
    </li>
  )
}

Header.propTypes ={
  texto:
}