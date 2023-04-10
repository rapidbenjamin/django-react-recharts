import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Charts from "./Charts";

export function HomePage() {
    return (
        <div>
            <h1>This is a react Application</h1>
        </div>
    );
}

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/charts" element={<Charts />} />
            </Routes>
        </Router>
    )
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
