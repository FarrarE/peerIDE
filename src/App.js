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
  const [redoIndex, setRedoIndex] = useState(false);
  const [theme, setTheme] = useState("monokai");

  useEffect(() => {
  }, []);


  function newFileHandler() {
    if (!files)
      return;

    if (!selectedIndex) {
      setSelectedIndex(0);
    }

    let newList = [...files];
    let newFile = { fileName: "NewFile.txt", key: uuidv4(), index: null, content: "", ref: null }
    newList.push(newFile);
    setFiles(newList);
  }

  function setSelectedHandler(index) {
    setSelectedIndex(index);
  }

  function onChangeHandler(content, key, index) {
    let newList = [...files];

    if (redoIndex !== false) {
      history[selectedIndex].log.splice(redoIndex + 1, history[selectedIndex].log.length);
      setRedoIndex(false);
    }
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
  function updateHistory(key, content) {
    let length = history.length;
    let index = -1;

    // Base state, create history log
    if (!length) {
      setHistory([{ key: key, log: ["", content] }]);
    } else {
      //Log exists so check for matching log
      for (let i = 0; i < length; ++i) {
        if (history[i].key === key) {
          index = i;
        }
      }
      // update matching log content or add new log if there is no matching log
      if (index > -1)
        history[index].log.push(content)
      else setHistory(history => [...history, { key: key, log: [content] }]);
    }
    console.log(history)
  }

  function historyIndexOf(key) {
    let index = -1;
    for (let i = 0; i < history.length; ++i) {
      if (history[i].key === key)
        index = i;
    }
    return index;
  }

  // dropdown menu event handlers

  function uploadFileHandler() {
  }

  // FILE
  // download file
  const downloadToFile = () => {
    if (!files[0]) {
      alert("No File selected");
      return;
    }
    const a = document.createElement('a');
    const file = new Blob([files[selectedIndex].content], { type: 'text/plain' });

    a.href = URL.createObjectURL(file);
    a.download = files[selectedIndex].fileName;
    a.click();

    URL.revokeObjectURL(a.href);
  };


  // EDIT

  function undoHandler() {

    if (selectedIndex === false)
      return;
    
    if (history[selectedIndex] === undefined)
      return;

    let index;

    if (redoIndex !== false) {
      index = redoIndex;
    } else index = history[selectedIndex].log.length - 1;

    if (index <= 0) {
      return;
    }

    let newList = [...files];

    newList[selectedIndex].content = history[selectedIndex].log[index - 1];

    if (redoIndex !== false) {
      setRedoIndex(redoIndex - 1);
    } else setRedoIndex(index - 1);

    setFiles(newList);
  }


  function redoHandler() {
    if (selectedIndex === false)
      return;

    if (history[selectedIndex] === undefined)
      return;

    let index;

    if (redoIndex !== false) {
      index = redoIndex;
    } else return;

    if (index >= history[selectedIndex].log.length - 1)
      return;

    let newList = [...files];

    newList[selectedIndex].content = history[selectedIndex].log[index + 1];

    if (redoIndex !== false) {
      setRedoIndex(redoIndex + 1);
    } else setRedoIndex(index);
    setFiles(newList);
  }

  function cutHandler() {
    if (selectedIndex === false)
      return;
  }

  function copyHandler() {
    if (selectedIndex === false)
      return;

    let editor = files[selectedIndex].ref;
    const selectedText = editor.current.editor.getSelectedText();
    console.log(selectedText);
  }

  function pasteHandler() {
    if (selectedIndex === false)
      return;
  }


  function setThemeHandler(event) {
    setTheme(event.target.innerHTML.toLowerCase().replaceAll(' ', '_'))
  }


  function setEditor(ref, key) {
    for (let i = 0; i < files.length; ++i) {
      if (files[i].key === key)
        files[i].ref = ref
    }
  }

  function aboutHandler(){
    alert("peerIDE\nVersion: 0.1\nAuthor: Ezra Farrar\nCopyright 2020 all rights reserved\n");
  }


  return (
    <div className={"App " + theme}>
      <Header
        download={downloadToFile}
        undo={undoHandler}
        redo={redoHandler}
        copy={copyHandler}

        about={aboutHandler}

        theme={theme}
        setTheme={setThemeHandler}
      />
      <Pages
        files={files}
        theme={theme}
        newFile={newFileHandler}
        onChange={onChangeHandler}
        setSelected={setSelectedHandler}
        setEditor={setEditor}

        undo={undoHandler}
        history={redoIndex}
      />
    </div>
  );
}

export default App;
