import React from 'react';
import { useState, useEffect } from 'react';
import Editor from '../Editor';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { GoPlus } from 'react-icons/go';
import './styles/index.css';

const languages = [
    "javascript",
    "java",
    "python",
    "xml",
    "ruby",
    "sass",
    "markdown",
    "mysql",
    "json",
    "html",
    "handlebars",
    "golang",
    "csharp",
    "elixir",
    "typescript",
    "css"
];

const themes = [
    "monokai",
    "github",
    "tomorrow",
    "kuroir",
    "twilight",
    "xcode",
    "textmate",
    "solarized_dark",
    "solarized_light",
    "terminal"
];

languages.forEach(lang => {
    require(`ace-builds/src-noconflict/mode-${lang}`);
    require(`ace-builds/src-noconflict/snippets/${lang}`);
});

themes.forEach(theme => require(`ace-builds/src-noconflict/theme-${theme}`));


function Pages(props) {
    const [theme, setTheme] = useState(themes[0])
    const [mode, setMode] = useState(languages[0]);

    let content;

    useEffect(() => {

    }, []);



    function getMode(fileName) {
        if (!fileName)
            return;

        console.log(fileName);
        return "java";
    }

    const listItems = props.files.map((file) => (
        <Tab key={"tab" + props.key} ><input type={"text"} value={file.fileName} readOnly={true} onDoubleClick={(e) => { e.target.readOnly = false }} /></Tab>
    ));

    const panelItems = props.files.map((file) => (
        <TabPanel key={"panel" + props.key}>
            <Editor
                file={file}
                name={props.key}
                mode="jsx"
                theme="monokai"
            />
        </TabPanel>
    ));

    return (
        <Tabs id="file-tabs">
            <TabList id="tab-list">
                {listItems}
                <Tab>
                    <GoPlus id="add-btn" onClick={props.newFile} />
                </Tab>
            </TabList>
            {panelItems}
            <TabPanel></TabPanel>
        </Tabs>
    );
}

export default Pages;
