import { BrowserRouter as Router,Routes,Route ,Link} from 'react-router-dom';
import './App.css';
import Alltask from './components/Alltask';
import Archieved from './components/Archievedtask';
import Completed from './components/CompletedTask';
import Createtask from './components/Createtask';
import InProgress from './components/Inprogress';
import './Style/index.css';



function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <li>
            <Link to="/" >All Task</Link>
          </li>
          <li>
            <Link to="/createtask">Create Task</Link>
          </li>
          <li>
            <Link to="/inprogress">In Progress Task</Link>
          </li>
          <li>
            <Link to="/completed">Completed Task</Link>
          </li>
          <li>
            <Link to="/archieved"> ArchievedTask</Link>
          </li>
        </nav>
        <Routes>
          <Route  path='/' element={ <Alltask/>}></Route>
          <Route exact path='/inprogress' element={< InProgress />}></Route>
          <Route exact path='/createtask' element={< Createtask/>}></Route>
          <Route exact path='/completed' element={< Completed/>}></Route>
          <Route exact path='/archieved' element={< Archieved/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
