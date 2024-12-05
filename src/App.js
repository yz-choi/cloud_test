import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Menupage from "./pages/MenuPage";
import Layout from "./layouts/Layout";

function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path="menupage" element={<Menupage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
