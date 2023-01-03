import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReceivedMassage from "./ReceivedMassage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ReceivedMassage />} />
      </Routes>
    </BrowserRouter>
  );
}
