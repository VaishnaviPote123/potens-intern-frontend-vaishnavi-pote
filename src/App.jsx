import { Routes, Route } from "react-router-dom";

import Category from "./pages/Category";
import Details from "./pages/Details";
import Confirmation from "./pages/Confirmation";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Category />} />
      <Route path="/details" element={<Details />} />
      <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
  );
}

export default App;