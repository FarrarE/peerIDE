import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header';
import Pages from './Components/Pages';
import './App.css';

function App() {
  const [files, setFiles] = useState([{fileName:"index1.js"},{fileName:"index.css"}]);


  useEffect(() => {
  }, []);

  function newFileHandler(){
    if(!files)
      return;

    let newList = [...files];
    newList.push({fileName:"NewFile.txt"});
    setFiles(newList);
  }
  return (
    <div className="App">
      <Header />
      <Pages files={files} newFile={newFileHandler} />
    </div>
  );
}

export default App;
