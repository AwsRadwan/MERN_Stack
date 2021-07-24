import logo from './logo.svg';
import './App.css';
import ColorForm from './components/ColorForm';
import Box from './components/Box';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  // const thisStyle = {
  //   backgroundColor: this.props.color,
  // }
  const [currentMsg, setCurrentMsg] = useState([]);
    
    const addBox = (xx) => {
        setCurrentMsg( [...Array.from(currentMsg), xx] );
    } 

    return (
      <div className="App">
        <ColorForm addBox={addBox} />
        <Box dives={currentMsg}/>
      </div>
    );
  
}

export default App;


  // currentMsg.forEach((x,y) => <Box color={x} zxzxz={y} /> )
