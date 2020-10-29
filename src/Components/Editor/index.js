import React from 'react';
import { useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState} from 'draft-js';
import './styles/index.css';

function EditWindow() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  React.useEffect(() => {
    focusEditor()
  }, []);

  const editor = React.useRef(null);
 
  function focusEditor() {
    editor.current.focus();
  }
 
 
  return (
    <div id="editor-wrapper" onClick={focusEditor}>
      <Editor
        ref={editor}
        editorState={editorState}
        onChange={editorState => setEditorState(editorState)}
      />
    </div>
  );
}


export default EditWindow;
