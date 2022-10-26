import React from 'react';
import './App.css';
import {SimpleCounter} from "./components/SimpleCounter/SimpleCounter";
import {Settings} from "./components/Settings/Settings";

function App() {
    return (
        <div className={"app"}>
            <div className={"appContainer"}>
                <Settings/>
                <SimpleCounter/>
            </div>
        </div>
    );
}

export default App;
