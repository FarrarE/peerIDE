import React from 'react';
import { useState, useEffect } from 'react';
import Editor from '../Editor';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { GoPlus } from 'react-icons/go';
import './styles/index.css';


function Pages(props) {
    const [theme, setTheme] = useState("github")
    useEffect(() => {

    }, []);

    function getMode(fileName) {
        if (!fileName)
            return;

        console.log(fileName);
        return "java";
    }

    const listItems = props.files.map((file) => (
        <Tab key={"tab"+props.key} ><input type={"text"} value={file.fileName} readOnly={true} onDoubleClick={(e) => { e.target.readOnly = false }} /></Tab>
    ));

    const panelItems = props.files.map((file) => (
        <TabPanel key={"panel"+props.key}>
            <Editor
                file={file}
                name={props.key}
                mode={getMode(props.fileName)}
                theme={theme}
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
