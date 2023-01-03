import Router from "./Router";
import { GlobalStyle } from "./Style/GlobalStyle";
import { RecoilRoot } from "recoil";
import React from "react";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <RecoilRoot>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Router />
        </React.Suspense>
      </RecoilRoot>
    </>
  );
}
