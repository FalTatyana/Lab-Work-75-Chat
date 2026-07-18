import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import NewMessage from "./components/NewMessage/NewMessage";


function App() {
  return (
    <Layout>
      <Routes>
        <Route path={"/messages"} element={<NewMessage />} />
      </Routes>
    </Layout>
  );
}

export default App;
