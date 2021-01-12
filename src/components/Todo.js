import React from 'react';

const Todo = ({ text, todo, todos, setTodos }) => {

    const completeHandler = () => {
        setTodos(
            todos.map(item => {
                if (item.id === todo.id) {
                    return {
                        ...item, completed: !item.completed
                    };
                }
                return item;
            })
        );
    };
    return (
        <div className="todo">
             <input type="checkbox" onChange={completeHandler} className={`todo-item ${todo.completed ? "completed" : ""}`}></input> 
             <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>            
        </div>
    );
};

export default Todo;