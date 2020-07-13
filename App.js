import React, { useState } from "react";
import { StoreProvider } from "./src/store";
import AppLoading from "./src/components/AppLoading";
import AppRouter from "./src";

export default function App() {
  const [isAppReady, setIsAppReady] = useState(false);

  return isAppReady ? (
    <StoreProvider>
      <AppRouter />
    </StoreProvider>
  ) : (
    <AppLoading setIsAppReady={setIsAppReady} />
  );
}
