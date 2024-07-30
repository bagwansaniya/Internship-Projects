import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Postdataprovider from "./store/postdataprovider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Postdataprovider>
      <App />
    </Postdataprovider>
  </React.StrictMode>
);
