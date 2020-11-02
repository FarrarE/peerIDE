import React from 'react';
import { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import AceEditor from "react-ace";
import './styles/index.css';
import themes from './themes';
import modes from './modes';

modes.forEach(lang => {
  require(`ace-builds/src-noconflict/mode-${lang}`);
  require(`ace-builds/src-noconflict/snippets/${lang}`);
});

themes.forEach(theme => require(`ace-builds/src-noconflict/theme-${theme}`));


function EditWindow(props) {
  const editor = useRef(null);

  useEffect(()=>{
    props.setEditor(editor, props.name);
  }, []);

  function onChange(newValue) {
    let content = newValue;
    props.onChange(props.fileName, props.name, content, props.index);
  }

  function onSelectionChange(selection) {
    const content = this.refs.aceEditor.editor.session.getTextRange(selection.getRange());
  }

  return (
    <div id="editor-wrapper">
      <AceEditor
        ref={editor}
        id={props.name}
        mode={props.mode}
        theme={props.theme}
        name={props.name}
        editorProps={{ $blockScrolling: true }}
        showPrintMargin={false}
        height="95vh"
        width="100%"
        value={props.content}


        onSelectChange={onSelectionChange}
        onChange={onChange}
      />
    </div>
  );
}


export default EditWindow;
