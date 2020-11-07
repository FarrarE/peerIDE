import React from 'react';
import { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import AceEditor from "react-ace";
import './styles/index.css';
import themes from './themes';

import modes from './modes';
import 'ace-builds/src-min-noconflict/ext-searchbox';

modes.forEach(lang => {
  require(`ace-builds/src-noconflict/mode-${lang}`);
  require(`ace-builds/src-noconflict/snippets/${lang}`);
});

themes.forEach(theme => require(`ace-builds/src-noconflict/theme-${theme}`));


function EditWindow(props) {
  const editor = useRef(null);
  const [reload, setReload] = useState(false);


  useEffect(() => {
    props.setEditor(editor, props.name);
    if (editor) {
      editor.current.editor.commands.addCommand({   // commands is array of key bindings.
        name: 'undo', //name for the key binding.
        bindKey: { win: 'Ctrl-z', mac: 'Command-z' }, //key combination used for the command.
        exec: () => { props.undo() },  //function to execute when keys are pressed.
      })
    }
  }, [props.content])

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

        commands={[{   // commands is array of key bindings.
          name: 'undo', //name for the key binding.
          bindKey: { win: 'Ctrl-Z', mac: 'Command-Z' }, //key combination used for the command.
          exec: () => { props.undo() }
        },  
        {
          name: 'redo',
          bindKey: { win: 'Ctrl-Z', mac: 'Command-Z' },
          exec: () => { props.redo() }
        }]}
      />
    </div>
  );
}


export default EditWindow;
