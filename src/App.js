import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { v4 as uuidv4 } from 'uuid';
import Header from './Components/Header';
import Pages from './Components/Pages';
import './App.css';

function App() {
  const [files, setFiles] = useState([]);


  useEffect(() => {
  }, []);

  function newFileHandler(){
    if(!files)
      return;

    let newList = [...files];
    let newFile = {fileName:"NewFile.txt", key: uuidv4()}
    newList.push(newFile);
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
