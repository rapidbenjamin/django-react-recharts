import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./App";
import Chart from "./Charts";

export default function App(props) {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/charts' element={<Chart />} />
            </Routes>
        </Router>
    )
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
