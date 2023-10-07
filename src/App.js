import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Cover from './Frontend/components/Home/Cover';

function App() {
  return (
    <Router>
    <Routes>
      <Route exact path='/' element={<Cover/>} />
    </Routes>
    </Router>
  );
}

export default App;
