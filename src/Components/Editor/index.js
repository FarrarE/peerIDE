import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import AceEditor from "react-ace";
import './styles/index.css';

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

function EditWindow() {

  function onChange(newValue) {
    console.log("change", newValue);
  }


  return (
    <div id="editor-wrapper">
      <AceEditor
        mode="java"
        theme="github"
        onChange={onChange}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
        showPrintMargin={false}
        height="95vh"
        width="100%"
      />
    </div>
  );
}


export default EditWindow;
