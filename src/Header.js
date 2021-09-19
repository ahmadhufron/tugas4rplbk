import React, { useContext } from "react";
import { AppsContext } from "./App";

export default function Header() {
  const { apps } = useContext(AppsContext);

  return (
    <div>
      <div>
          <h1>Praktikum RPLBK Kelompok 27</h1>
      </div>
      <hr />
      <br></br>
    </div>
  );
}