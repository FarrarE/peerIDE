import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { v4 as uuidv4 } from 'uuid';
import Header from './Components/Header';
import Pages from './Components/Pages';
import './App.css';

function App() {
  const [files, setFiles] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(false);

  useEffect(() => {
  }, []);

  function newFileHandler() {
    if (!files)
      return;

    if(!selectedIndex){
      setSelectedIndex(0);
    }

    let newList = [...files];
    let newFile = { fileName: "NewFile.txt", key: uuidv4(), index: null, content: "" }
    newList.push(newFile);
    setFiles(newList);
  }

  function setSelectedHandler(index){
    setSelectedIndex(index);
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
  }

  const downloadToFile = () => {
    if(!files[0]){
      alert("No File selected");
      return;
    }
    const a = document.createElement('a');
    const file = new Blob([files[selectedIndex].content], {type: 'text/plain'});
  
    a.href= URL.createObjectURL(file);
    a.download = files[selectedIndex].fileName;
    a.click();
  
    URL.revokeObjectURL(a.href);
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
        setSelected={setSelectedHandler}
      />
    </div>
  );
}

export default App;
