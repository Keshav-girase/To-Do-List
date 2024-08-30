import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./ToDoList.module.css";

export default function ToDoList() {
    let [todos, setTodos] = useState([{ task: "Sample Task", id: uuidv4(), isDone: false }]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
        });
        setNewTodo("");
    };

    let updateToDoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    let markAllAsDone = () => {
        setTodos((todos) =>
            todos.map((todo) => ({
                ...todo,
                isDone: true,
            }))
        );
    };

    let markAsDone = (id) => {
        setTodos((todos) =>
            todos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        isDone: true,
                    };
                } else {
                    return todo;
                }
            })
        );
    };

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>To Do List</h3>
            <div className={styles.inputContainer}>
                <input
                    type="text"
                    placeholder="Add your tasks..."
                    value={newTodo}
                    onChange={updateToDoValue}
                    className={styles.input}
                />
                <button
                    onClick={addNewTask}
                    className={styles.addButton}
                >
                    Add Task
                </button>
            </div>
            <ul className="list-none p-0 m-0">
                {todos.map((todo) => (
                    <li key={todo.id} className={styles.todoItem}>
                        <span
                            className={`${styles.todoText} ${todo.isDone ? styles.completed : ""}`}
                        >
                            {todo.task}
                        </span>
                        <div className="flex gap-2">
                            <button
                                onClick={() => markAsDone(todo.id)}
                                className={`${styles.markDoneButton} ${todo.isDone ? styles.completedButton : ""}`}
                                disabled={todo.isDone}
                            >
                                {todo.isDone ? "Completed" : "Mark As Done"}
                            </button>
                            <button
                                onClick={() => deleteTodo(todo.id)}
                                className={styles.deleteButton}
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <button
                onClick={markAllAsDone}
                className={styles.markAllDoneButton}
            >
                Mark All As Done
            </button>
        </div>
    );
}
    