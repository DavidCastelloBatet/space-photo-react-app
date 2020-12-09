import {BrowserRouter, Route} from "react-router-dom";
import './App.css';

import Home from "./components/Home/Home";
import NasaPhoto from "./components/NasaPhoto/NasaPhoto"

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <div>
          <Route component={Home} path="/" exact />
          <Route component={NasaPhoto} path="/nasaphoto" />
        </div>
     </BrowserRouter>
    </div>
  );
}

export default App;
