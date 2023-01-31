import React from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";

function App() {
    return (
        <div className="App">
            <Header title={'New header'}/>
            <Body title={'New body'}/>
            <Footer title={'New footer'}/>
        </div>
    );
}

export default App;
