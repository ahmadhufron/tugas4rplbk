import React, { useContext } from "react";
import { AppsContext } from "./App";

export default function Header() {
  const { apps } = useContext(AppsContext);

  return (
    <div>
      <div>
          <h1 style={{fontFamily:'Roboto', fontWeight:'bold', color:'white', textShadow:'2px 2px black', letterSpacing:'2px'}}>Praktikum RPLBK Kelompok 27</h1>
      </div>
      <hr />
      <br></br>
    </div>
  );
}