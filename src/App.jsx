/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import Calculator from "./components/Calculator";

function App() {
  return (
    <>
      <main className="flex flex-col justify-end items-center  ">
        <Calculator />
      </main>
    </>
  );
}

export default App;
