import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import PortalPage from "./pages/PortalPage";
import CategoryPage from "./pages/CategoryPage";
import SubmitPage from "./pages/SubmitPage";
import ContentPage from "./pages/ContentPage";

function App() {
  return(
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/portal" element={<PortalPage />} />
      <Route path="/category/:type" element={<CategoryPage />} />
      <Route path="/submit" element={<SubmitPage />} />
      <Route path="/content/:id" element={<ContentPage />} />
    </Routes>
  );
}

export default App;
