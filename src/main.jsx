import React from "react";
import ReactDOM from "react-dom/client";
// import Online from "./online/Online.jsx";
import OnlineContent from "./online/OnlineContent";
import MockContent from "./online/Mock";
import StudyContent from "./online/Study";
import PreviousContent from "./online/Previous";
import CounselingContent from "./online/counseling";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import Navbar from "./Navbar";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
