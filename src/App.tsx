import axios from "axios";
import { useEffect } from "react";
import Router from "./Router";
import { GlobalStyle } from "./Style/GlobalStyle";

const BEARE_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVpZCI6ImRhZWU2YmI5LTEwZmEtNDZmMC04ZDk0LTdlMjdkODY3NzdjOSJ9LCJhY2NvdW50Ijp7InVpZCI6IjJlOTM3OWExLTJmZjEtNDU1MC05OTkwLWVlZGFkZmNjYjNkOCJ9LCJpYXQiOjE2NzI2NTY5OTEsImV4cCI6MTY3NTI0ODk5MSwiaXNzIjoiZmFuZGRsZSIsInN1YiI6ImF1dGgifQ.IplI76PV-fbzeeAC9PKcvenJKO9LqV2SsVq1AtnHJ3Q";

export default function App() {
  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://prod-app.fanddle.co.kr/gift/recv?giftUid=9a49ba72-dfbe-4ef6-9104-609f77c11ff2",
  //       {
  //         headers: { Authorization: `Bearer ${BEARE_TOKEN}` },
  //       }
  //     )
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}
