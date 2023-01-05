import { GlobalStyle } from "./Style/GlobalStyle";
import { RecoilRoot } from "recoil";
import InboxPage from "./Page/InboxPage";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <RecoilRoot>
        <InboxPage />
      </RecoilRoot>
    </>
  );
}
