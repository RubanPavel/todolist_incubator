import React from "react";


type TodoListProps = {
    title: string,
    pomid?: number,
    tasks: Array<TasksType>,
}

type TasksType = {
    id: number,
    title: string,
    isDone: boolean,
}


export const Todolist = (props: TodoListProps) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+{props.pomid}</button>
            </div>

            <ul>
                {props.tasks.map((objectsFromTasks: TasksType) => {
                    return (
                        <li key={objectsFromTasks.id}>
                            <input type="checkbox" defaultChecked={objectsFromTasks.isDone}/>
                            <span>{objectsFromTasks.title}</span>
                        </li>
                    );
                })}

            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
}