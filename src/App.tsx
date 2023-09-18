import React, { useState } from "react";
import ReactLogo from "./assets/react.svg";
import "./App.css";
import { Header } from "@components/";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import queryClient from "@utils/queryClient";

function App() {
  const [count, setCount] = useState(0);
  return (
    <QueryClientProvider client={queryClient}>
      <Header user={{ name: "miao" }} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
