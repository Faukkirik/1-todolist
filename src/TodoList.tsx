import React from 'react';
// title - заголовок
// tasks - список задач

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
}

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}


const TodoList = (props: TodoListPropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>{
                props.tasks.map( (t) => {
                    return <li>
                        <input type="checkbox" checked={t.isDone}/>
                        <span>{t.title}</span>
                    </li>
                })
            }
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
};

export default TodoList;