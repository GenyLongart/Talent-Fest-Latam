import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { useContext, useState } from "react";
import { ProductProvider } from "./context/productContext";


ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    
      {/* <ProductProvider> */}
        <App />
      {/* </ProductProvider> */}
    
  </>
);
