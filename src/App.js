import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Work } from './pages/Work/Work';
import Header from './components/Header/Header.js';

import "./styles/themes.css";

function App() {
    return (

        <Router>
            <Header />
            <Routes>
                {/* <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/work" element={<Work />} /> */}
            </Routes>
        </Router>
    );
}

export default App;
