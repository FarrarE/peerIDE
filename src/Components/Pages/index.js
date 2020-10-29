import React from 'react';
import { useState, useEffect } from 'react';
import Editor from '../Editor';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { GoPlus } from 'react-icons/go';
import './styles/index.css';

function Pages(props) {
    const listItems = props.files.map((file) => (
        <Tab><input type="text" value={file.fileName} readonly="true" ondblclick="this.readOnly='';"/></Tab>
    ));

    const panelItems = props.files.map((file) => (
        <TabPanel>
            <Editor file={file} />
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
        </Tabs>
    );
}

export default Pages;
