import { useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header';
import Editor from './Components/Editor'
import './App.css';

function App() {


  useEffect(() => {
  }, []);

 
  return (
    <div className="App">
      <Header />
      <Editor />
    </div>
  );
}

export default App;
