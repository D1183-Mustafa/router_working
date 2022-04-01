import {Routes, Route, Link} from "react-router-dom";
import './App.css';
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Users from "./components/Users";
import User from "./components/User";



function App() {
  return (
    <div className="App">
      <nav className="nav">
        <ul className="ul">
          <li>
            <Link className="link" to="/">Home</Link>
          </li>
          <li>
            <Link className="link" to="/about">About</Link>
          </li>
          <li>
            <Link className="link" to="/users">Employees</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/user/:id" element={<User/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
