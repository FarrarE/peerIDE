import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { GoPlus } from 'react-icons/go';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Header from './Components/Header';
import Editor from './Components/Editor'
import './App.css';

function App() {


  useEffect(() => {
  }, []);


  return (
    <div className="App">
      <Header />

      <Tabs id="file-tabs">
        <TabList>
          <Tab id="tab-list">index.js</Tab>
          <Tab>index.css</Tab>
          <Tab>
            <GoPlus />
          </Tab>
        </TabList>
        <TabPanel>
          <Editor />
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
