import './App.css';
import { BrowserRouter } from "react-router-dom";
import Navbar from './pages/Navbar';
import RoutesComp from './Routes/Routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <RoutesComp />
      </BrowserRouter>
    </div>
  );
}

export default App;