import { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { v4 as uuidv4 } from 'uuid';
import Header from './Components/Header';
import Pages from './Components/Pages';
import './App.css';

function App() {
  const [files, setFiles] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(false);
  const [history, setHistory] = useState([]);
  const [historyTracker, setHistoryTracker] = useState(false);

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

    updateHistory(key, content);

    for (let i = 0; i < newList.length; ++i) {
      if (newList[i].key === key) {
        newList[i].content = content;
        newList[i].index = index;
      }
    }
    setFiles(newList);
  }


  // Updates the history state variable, tracking each change for each editor 
  function updateHistory(key, content){
    let length = history.length;
    let index = -1;

    // Base state, create history log
    if(!length){
      setHistory([{key:key,log:[content]}]);
    }else{
    //Log exists so check for matching log
      for(let i = 0; i < length;++i){
        if(history[i].key === key){
          index = i;
        }
      }
      // update matching log content or add new log if there is no matching log
      if(index > -1)
        history[index].log.push(content)
      else setHistory(history => [...history, {key:key,log:[content]}]);
    }
    console.log(history)
  }

  // dropdown menu event handlers

  function uploadFileHandler(){
  }

  // download file
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

  function undoHandler(){
    if(!selectedIndex)
      return;    
  }

  function redoHandler(){
  }

  function cutHandler(){
  }

  function copyHandler(){
  }

  function pasteHandler(){
  }


  return (
    <div className="App">
      <Header 
        download={downloadToFile}
        undo={undoHandler}
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
