import {BrowserRouter, Route, Routes} from "react-router-dom";
import BrandBG from "./components/BrandBG"
import Header from "./components/Header"
import Main from "./components/Main";
import { HomePage, GallerPage } from "./pages";

function App() {

  return (
   <BrowserRouter>
      <BrandBG />
      <Header />

      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GallerPage />} />
        </Routes>
      </Main>

    </BrowserRouter>
  )
}

export default App
