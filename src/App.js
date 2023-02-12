import './App.css';
import {  FaSearch, IconName } from "react-icons/fa";
import {BrowserRouter ,Routes,Route} from 'react-router-dom';
import Home from './pages/home';
import SearchPage from './pages/searchPage';
import Aboutus from './pages/Aboutus';
function App() {

  return (


    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/about-us" element={<Aboutus />} />
          </Routes>

        </BrowserRouter>
      </header>
    </div>


  );
}

export default App;
