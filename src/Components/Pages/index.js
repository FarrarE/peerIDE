import React from 'react';
import { useState, useEffect } from 'react';
import Editor from '../Editor';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { GoPlus } from 'react-icons/go';
import './styles/index.css';


function Pages(props) {
    let content;

    useEffect(() => {

    }, []);


    const listItems = props.files.map((file) => (
        <Tab onClick={onChangeHandler} key={"tab" + props.key} ><input type={"text"} value={file.fileName} readOnly={true} onDoubleClick={(e) => { e.target.readOnly = false }} /></Tab>
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

    function onChangeHandler(event){
        alert(event.target.key)
    }

    return (
        <Tabs id="file-tabs">
            <TabList id="tab-list">
                {listItems}
                <Tab >
                    <GoPlus id="add-btn" onClick={props.newFile} />
                </Tab>
            </TabList>
            {panelItems}
            <TabPanel></TabPanel>
        </Tabs>
    );
}

export default Pages;
