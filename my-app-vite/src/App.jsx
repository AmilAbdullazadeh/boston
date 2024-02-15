import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Layout from "./pages/Layout";
import New from "./pages/New";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );

}

export default App
