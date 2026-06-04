import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Materials from "./pages/Materials";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/materials"
          element={<Materials />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;