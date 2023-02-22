import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/Layouts/Layout";
import Navigation from "./components/Layouts/Header/Navigation";
import MainPage from "./pages/Main";
import IssuePage from "./pages/Issue/Issue";
import ReadIssuePage from "./pages/Issue/ReadIssue";
import CreateIssuePage from "./pages/Issue/CreateIssue";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/issues" element={<IssuePage />} />
            <Route path="/issues/:issue_id" element={<ReadIssuePage />} />
            <Route path="/issues/new" element={<CreateIssuePage />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </div>
  );
};

export default App;
