import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/Layouts/Layout";
import Navigation from "./components/Layouts/Header/Navigation";
import MainPage from "./pages/Main";
import IssuePage from "./pages/Issue";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/issues" element={<IssuePage />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </div>
  );
};

export default App;
