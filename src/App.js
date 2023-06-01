import './App.css';
import Summary from './Summary.js'
import Blogs from './UserData.js';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Summary/>}/>
          <Route path='/blogs/:id' element={<Blogs/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
