import { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { v4 as uuidv4 } from 'uuid';
import Header from './Components/Header';
import Pages from './Components/Pages';
import './App.css';

function App() {
  const [files, setFiles] = useState([]);
  const [keys, setKeys] = useState([]);
  const [content, setContent] = useState([]);
  const [editor, setEditor] = useState([]);

  const [selectedIndex, setSelectedIndex] = useState(false);
  const [history, setHistory] = useState([]);
  const [cursorHistory, setCursorHistory] = useState([]);
  const [redoIndex, setRedoIndex] = useState(-1);
  const [theme, setTheme] = useState("monokai");

  useEffect(() => {
  }, []);


  function newFileHandler() {
    if (!selectedIndex) {
      setSelectedIndex(0);
    }

    setFiles(() => [...files, "NewFile.txt"]);
    setContent(() => [...content, ""]);
    setHistory(() => [...history, [""]])
    setKeys(() => [...keys, uuidv4()]);
  }

  function setSelectedHandler(index) {
    setSelectedIndex(index);
    setRedoIndex(-1);
  }

  function onChangeHandler(content, key, index) {

    if (selectedIndex < 0)
      return;

    let newHistory = [...history];

    if (redoIndex !== -1) {
      newHistory[selectedIndex].splice(redoIndex + 1, newHistory[selectedIndex].length)
      setRedoIndex(-1);
    }

    newHistory[selectedIndex].push(content);
    setHistory(newHistory);

    let newContent = [...this.content];
    newContent[selectedIndex] = content;
    setContent(newContent);
  }

  function onCursorChangeHandler(cursor) {
    if(redoIndex !== -1)
      return;

  
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
    const file = new Blob([content[selectedIndex]], { type: 'text/plain' });

    a.href = URL.createObjectURL(file);
    a.download = files[selectedIndex];
    a.click();

    URL.revokeObjectURL(a.href);
  };


  // EDIT

  function undoHandler() {
    const cursorPosition = editor[selectedIndex].current;
    if (selectedIndex < 0)
      return;

    let index = -1;
    if (redoIndex < 0) {
      index = history[selectedIndex].length - 1;
      setRedoIndex(index);
    } else index = redoIndex;

    if (redoIndex === 0)
      return;

    --index;
    setRedoIndex(index)
    let newContent = [...content];
    newContent[selectedIndex] = history[selectedIndex][index];
    setContent(newContent);
  }


  function redoHandler() {
    if (selectedIndex < 0)
      return;

    let index = -1;
    if (redoIndex < 0) {
      return;
    } else index = redoIndex;

    if (redoIndex === history[selectedIndex].length - 1)
      return;


    ++index;

    // sets cursor otherwise curso will not move on redo
    editor[selectedIndex].current.editor.moveCursorTo(cursorHistory[selectedIndex][index].row, cursorHistory[selectedIndex][index].column);

    setRedoIndex(index)
    let newContent = [...content];
    newContent[selectedIndex] = history[selectedIndex][index];
    setContent(newContent);
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
  }

  function pasteHandler() {
    if (selectedIndex === false)
      return;
  }


  function setThemeHandler(event) {
    setTheme(event.target.innerHTML.toLowerCase().replaceAll(' ', '_'))
  }


  function setEditorHandler(ref, key) {
    for (let i = 0; i < keys.length; ++i) {
      if (keys[i] === key)
        editor[i] = ref
    }
  }

  function aboutHandler() {
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
        content={content}
        keys={keys}

        theme={theme}
        newFile={newFileHandler}
        onChange={onChangeHandler}
        onCursorChange={onCursorChangeHandler}
        setSelected={setSelectedHandler}
        setEditor={setEditorHandler}

        undo={undoHandler}
        redo={redoHandler}
        history={redoIndex}
      />
    </div>
  );
}

export default App;
