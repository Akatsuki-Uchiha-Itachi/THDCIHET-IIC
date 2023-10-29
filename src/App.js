import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './Frontend/components/Home/Home';
import Event from './Frontend/components/Event/Event';
import Auth from './Frontend/components/Auth/Auth';

function App() {
  return (
    <Router>
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/events' element={<Event/>}/>
      <Route exact path='/login' element={<Auth/>}/>
    </Routes>
    </Router>
  );
}

export default App;
