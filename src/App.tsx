import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {
      const tasks1 = [
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false },
          { id: 3, title: "ReactJS", isDone: false }
    ]
    const tasks2 = [
        { id: 1, title: "Hello world", isDone: true },
        { id: 2, title: "I am Happy", isDone: false },
        { id: 3, title: "Yo", isDone: false }
    ]

    const title1 = 'What to learn11';
    const title2 = 'What to learn75';
    return (
        <div className='App'>
            <Todolist title={title1} pomid = {375} tasks={tasks1} />
            <Todolist title ={title2}  pomid = {253} tasks={tasks2}/>
        </div>
    );

}


export default App;
