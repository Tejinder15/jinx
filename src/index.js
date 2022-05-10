import React from "react";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter} from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext/auth-context";
import {createRoot} from "react-dom/client";
import { PostProvider } from "./Context/PostContext/post-context";


// Call make Server
makeServer();
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
    <PostProvider>
    <App />
    </PostProvider>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
