import './App.css';
import { Router } from '@reach/router'
import Main from './views/Main';
import NewProject from './views/NewProject';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {useState, useEffect} from 'react'
import dateFormat from 'dateformat';



function App() {

  // const [allProjects, setAllProjects] = useState([]);
  // const [loaded, setLoaded] = useState(false);

  // useEffect(
  //   () => {
  //       axios.get("http://localhost:8000/api/tasks")
  //       .then(res => {
  //           setAllProjects(res.data.Tasks);
  //           setLoaded(true);
  //           // let projects = res.data.Tasks;
  //           // let pro= projects.filter(pp => {
  //           //     return pp.status === "Backlog"})
  //           // setData();
  //           // setBacklog(pro);
  //           // setInProgress(projects.filter(pp => pp.status === "In Progress"));
  //           // setCompleted(projects.filter(pp => pp.status === "Completed"));
  //           // setLoaded(true);
  //       })
  //   }, []);

  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <NewProject path="/projects/new" />
      </Router>
    </div>
  );
}

export default App;
