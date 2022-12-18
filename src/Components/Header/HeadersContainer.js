import Header from "./Header";
import React from "react";

export default function HeadersContainer(){
  const headerTeste=[
    'Projects',
    'About Me',
    'Contact',
  ];
  return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {headerTeste.map((el,idx)=><Header key={idx} texto={el}/>)}
      </nav>
  )
}