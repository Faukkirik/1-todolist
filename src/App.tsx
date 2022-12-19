import React, {useState} from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";


// const removeTask = (taskId: number) => {
//     tasks_1.filter(t => t.id !== taskId)
//     console.log(tasks_1)
// }

// return(
//     <div className={"App"}>
//         <TodoList
//             removeTask = {removeTask}
//             title={todoListTitle}
//             tasks={tasks}
//     </div>
//)
export type FilterValuesType = "all" | "completed" | "active";

function App() {
    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: "HTML & CSS", isDone: true},
        {id: 2, title: "ES6 & JS", isDone: true},
        {id: 3, title: "React", isDone: false},
        {id: 4, title: "Redux", isDone: false},
    ]);
    let [filter, setFilter] = useState<FilterValuesType>('all');

    function removeTask(id: number) {
        let filteredTasks = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks);
    }

    function changeFilter (value: FilterValuesType) {
        setFilter(value);
    }

    let tasksForTodolist = tasks;
    if  (filter === "completed") {
        tasksForTodolist = tasks.filter( t => t.isDone === true);
    }

    if  (filter === "active") {
        tasksForTodolist = tasks.filter( t => t.isDone === false);
    }

    return (
        <div className="App">
            <TodoList title='What to learn'
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;


// let tasksForRender = tasks.filter((t) => {
//     if (filter === "active") return !t.isDone;
//     if (filter === "completed") return t.isDone;
//     return true;
// });
