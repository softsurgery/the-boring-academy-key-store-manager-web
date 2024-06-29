import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { Test } from "./components/TestComponent";
import KeyPage from "./pages/KeyPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Test text="Dashboard" />} />
        <Route path="/keys" element={<KeyPage />} />
        <Route path="/students" element={<Test text="Students" />} />
        <Route path="/courses" element={<Test text="Courses" />} />
        <Route path="/packs" element={<Test text="Packs" />} />
        <Route path="/remote" element={<Test text="Remote" />} />
        <Route path="/settings" element={<Test text="Settings" />} />
      </Routes>
    </Layout>
  );
}

export default App;
