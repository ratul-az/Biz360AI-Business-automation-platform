import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import BusinessIdeas from "./pages/BusinessIdeas";
import WebsiteGenerator from "./pages/WebsiteGenerator";
import MarketingStudio from "./pages/MarketingStudio";
import ImageGenerator from "./pages/ImageGenerator";
import BusinessGuidance from "./pages/BusinessGuidance";
import ProjectHistory from "./pages/ProjectHistory";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login */}
        <Route
          path="/"
          element={<Login />}
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        {/* Business Ideas */}
        <Route
          path="/ideas"
          element={<BusinessIdeas />}
        />

        {/* Website Generator */}
        <Route
          path="/website"
          element={<WebsiteGenerator />}
        />

        {/* Marketing Studio */}
        <Route
          path="/marketing"
          element={<MarketingStudio />}
        />

        {/* AI Image Generator */}
        <Route
          path="/images"
          element={<ImageGenerator />}
        />

        {/* Business Guidance */}
        <Route
          path="/guidance"
          element={<BusinessGuidance />}
        />

        {/* Project History */}
        <Route
          path="/history"
          element={<ProjectHistory />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;