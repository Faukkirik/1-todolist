import React from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";

const tasks_1: Array<TaskType> = [
    {id: 1, title: "HTML & CSS", isDone: true},
    {id: 2, title: "ES6 & JS", isDone: true},
    {id: 3, title: "React", isDone: false},
    {id: 4, title: "React", isDone: false},
]

const tasks_2: Array<TaskType> = [
    {id: 1, title: "pencil", isDone: false},
    {id: 2, title: "pen", isDone: true},
    {id: 3, title: "blocknote", isDone: true},
]
function App() {
    const todoListTitle_1: string = "What to learn"
    const todoListTitle_2: string = "What to buy"

    return (
        <div className="App">
            <TodoList title={todoListTitle_1} tasks={tasks_1}/>
            <TodoList title={todoListTitle_2} tasks={tasks_2}/>
        </div>
    );
}

export default App;
