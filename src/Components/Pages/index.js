import React from 'react';
import { useState, useEffect } from 'react';
import Editor from '../Editor';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { GoPlus } from 'react-icons/go';
import './styles/index.css';


function Pages(props) {
    function onChange(fileName, key, content, index) {
        props.onChange(content, key, index);
    }

    const listItems = props.files.map((file) => (
        <Tab key={"tab" + file.key}>{file.fileName}</Tab>
    ));

    const panelItems = props.files.map((file, index) => (
        <TabPanel key={"panel" + file.key}>
            <Editor
                file={file}
                name={file.key}
                mode="jsx"
                theme={props.theme}
                onChange={onChange}
                content={file.content}
                index={index}
                setEditor={props.setEditor}

                undo={props.undo}
                history={props.history}
            />
        </TabPanel>
    ));

    return (
        <Tabs id="file-tabs" onSelect={tabIndex => props.setSelected(tabIndex)} className={props.theme}>
            <TabList id="tab-list" >
                {listItems}
                <Tab>
                    <GoPlus id="add-btn" onClick={props.newFile} />
                </Tab>
            </TabList>
            <div id="starter-tab"></div>
            {panelItems}
            <TabPanel></TabPanel>
        </Tabs>
    );
}

export default Pages;
