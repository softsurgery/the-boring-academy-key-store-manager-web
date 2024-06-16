import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { Test } from "./components/TestComponent";

function App() {
  return (
    <Layout>
        <Routes>
          <Route path="/" element={<Test text="Dashboard" />} />
          <Route path="/keys" element={<Test text="Keys" />} />
          <Route path="/students" element={<Test text="Students" />} />
          <Route path="/courses" element={<Test text="Courses" />} />
          <Route path="/packs" element={<Test text="Packs" />} />
          <Route path="/settings" element={<Test text="Settings" />} />
        </Routes>
    </Layout>
  );
}

export default App;
