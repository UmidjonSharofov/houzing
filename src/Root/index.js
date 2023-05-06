import React from "react";
import { BrowserRouter, Navigate, Route, Routes,  } from "react-router-dom";

export default function Root() {
  return <BrowserRouter>
    <Routes>
        <Route path="/hom" element={<h1>Hom</h1>}/>
        <Route path="/" element={<Navigate to={'/home'}/>}/>
        <Route path="*" element={<h1>404 erro;</h1>}/>

    </Routes>
  </BrowserRouter>;
}
