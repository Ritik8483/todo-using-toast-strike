import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import ToDoTitlePage from './components/ToDoTitlePage';
import ToDoModal from './components/ToDoModal';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<ToDoTitlePage/> } />
        </Routes>
      </Router>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </div>
  );
}

export default App;
