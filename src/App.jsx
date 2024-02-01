import { Analytics } from "@vercel/analytics/react";

import MainContent from "./MainContent";

function App() {
  return (
    <>
      <MainContent />
      <Analytics />
    </>
  );
}

export default App;
