import React from 'react';
import "./App.css";

const App = () => {

  const arr = [
  {
    id: 1,
    name:"a",
  },
{
    id: 2,
    name:"b",
},
  ];


  return (
    <div className="App">
      <div className="container">
        <h1>Grocery List App</h1>
        <form className="shoppingForm">
          <input type="text" />
          <button>Go</button>
        </form>

        <ul className="allShopping">
          <li>
          <span className="singleShopping">Learn React</span>
          <button> Edit</button>
          <button>Delete</button>
          </li>
        </ul>
      </div>
      </div>
  
  );
   
};


export default App;