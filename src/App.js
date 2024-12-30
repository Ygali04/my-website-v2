import './index.css';

//Routing
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

//Pages
import Home from "./pages/Home";

//Components
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={<Home />} 
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
