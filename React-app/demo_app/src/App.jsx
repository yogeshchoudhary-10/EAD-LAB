import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Utilities from "./pages/Utilities";

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <nav><Link to="/">Home</Link> | <Link to="/utils">Utilities</Link></nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/utils" element={<Utilities />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App
