import React from 'react';
import { useState, useEffect } from 'react';
import Editor from '../Editor';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { GoPlus } from 'react-icons/go';
import './styles/index.css';

function Pages(props) {
    const listItems = props.files.map((file) => (
        <Tab><label id={file.fileName}>{file.fileName}</label></Tab>
    ));

    const panelItems = props.files.map((file) => (
        <TabPanel>
            <Editor file={file} />
        </TabPanel>
    ));

    return (
        <Tabs id="file-tabs">
            <TabList>
                {listItems}
                <Tab>
                    <GoPlus onClick={props.newFile} />
                </Tab>
            </TabList>
            {panelItems}
        </Tabs>
    );
}

export default Pages;
