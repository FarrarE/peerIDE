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

  function newFileHandler() {
    if (!files)
      return;

    let newList = [...files];
    let newFile = { fileName: "NewFile.txt", key: uuidv4(), index: null, content: "" }
    newList.push(newFile);
    setFiles(newList);
  }

  function onChangeHandler(content, key, index) {
    let newList = [...files];
    for (let i = 0; i < newList.length; ++i) {
      if (newList[i].key === key) {
        newList[i].content = content;
        newList[i].index = index;
      }
    }
    setFiles(newList);
    console.log(content, key, index)
  }

  const downloadToFile = (content, filename, contentType = 'text/plain') => {
    alert("ping")
  };

  return (
    <div className="App">
      <Header 
        download={downloadToFile}
      />
      <Pages 
        files={files} 
        newFile={newFileHandler}
        onChange={onChangeHandler} 
      />
    </div>
  );
}

export default App;
