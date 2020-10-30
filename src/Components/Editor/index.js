import React from 'react';
import { useState, useEffect } from 'react';
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
  let content;
  function onChange(newValue) {
    content = newValue;
    console.log("change", newValue);
  }

  return (
    <div id="editor-wrapper">
      <AceEditor
        mode={props.mode}
        theme={props.theme}
        onChange={onChange}
        name={props.name}
        editorProps={{ $blockScrolling: true }}
        showPrintMargin={false}
        height="95vh"
        width="100%"
      />
    </div>
  );
}


export default EditWindow;
