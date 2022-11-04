import './App.scss';
import {Homepage} from './components/Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Contact} from './components/Contact';


function App() {
  return (
    <BrowserRouter>
          <Routes >
            <Route path="/" exact element={<Homepage />}></Route>
            <Route path="/contact" exact element={<Contact />}></Route>
          </Routes>
    </BrowserRouter>
  
    
  );
}

export default App;
