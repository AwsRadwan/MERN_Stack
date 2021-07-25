import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Add_Task from './combonents/add_task';
import All_Tasks from './combonents/all_tasks';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [task, setTask] = useState([]);
  const addTask = (q) => {
    setTask([...task, q]);
  }
  const changeState = (i, x) => {
    if(x.q){
      
    }
  }

  return (
    <div className="App">
      <Add_Task addNew={addTask} />
      <All_Tasks tasks={task} change={changeState} />
    </div>
  );
}

export default App;
