import { Routes, Route, BrowserRouter } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import Display from "./components/Display";
import Details from './components/Details';
import Create from "./components/Create";
import Edit from './components/Edit';
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Client Manager</h1>
        <hr></hr>
        <Routes>
          <Route path="/" element={<Display />}></Route>
          <Route path='/create' element={<Create/>}></Route>
          <Route path='/details/:id' element={<Details/>}></Route>
          <Route path='/edit/:id' element={<Edit/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
