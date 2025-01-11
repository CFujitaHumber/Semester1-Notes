/**
* @file Main File for CFujitaHumber.Github.io
* @author Carson Fujita
* @copyright Carson Fujita 2025
*/

//React imports
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Page imports
import Home from './pages/Home'
import Database from "./pages/Database";

// clear existing HTML content
document.body.innerHTML = '<div id="app"></div>';

//import css styles
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNav from "./MainNav";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainNav isSubject="false" />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="database" element={<MainNav isSubject="true"/>}>
          <Route path="home" element={<Database />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// render
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);