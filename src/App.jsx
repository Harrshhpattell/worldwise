import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="product" element={<Product />}></Route>
        <Route path="pricing" element={<Pricing />}></Route>
        <Route path="homepage" element={<Homepage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
