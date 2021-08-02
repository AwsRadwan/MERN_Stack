import logo from './logo.svg';
import './App.css';
import Main from './views/Main';
import { Router } from '@reach/router';
import { Link } from '@reach/router';
import { navigate } from '@reach/router';
import DisplayProducts from './components/DisplayProducts';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Details from './views/Details';
import Update from './views/Update';


function App() {

  // const [x, setProducts] = useState([]);

  //   useEffect(
  //       () => {
  //           axios.get("http://localhost:8000/api/products")
  //           .then(res => {
  //               setProducts(res.data.products);
  //           })
  //       }
  //   );


  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <Details path="/:id" />
        <Update path="/update/:id" />
      </Router>
    </div>
  );
}

export default App;
