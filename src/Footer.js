import React, { useContext } from "react";
import { AppsContext } from "./App";

export default function Footer() {
  const { apps } = useContext(AppsContext);

  return (
    <div>
        <br></br>
        <hr />
        <div>
            <center><span>~~ Kelompok 27 ~~</span></center>
        </div>
    </div>
  );
}