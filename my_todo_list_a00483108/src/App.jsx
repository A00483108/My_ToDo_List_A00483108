import { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');

    // Load tasks from localStorage or IndexedDB
    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(savedTasks);
    }, []);

    // Add a task
    const addTask = () => {
        if (task) {
            const newTasks = [...tasks, task];
            setTasks(newTasks);
            localStorage.setItem('tasks', JSON.stringify(newTasks)); // Store tasks in localStorage
            setTask('');
        }
    };

    // Remove a task
    const removeTask = (taskToRemove) => {
        const updatedTasks = tasks.filter(t => t !== taskToRemove);
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    return (
        <div className="App">
            <h1>To-Do List</h1>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter your task"
            />
            <button onClick={addTask}>Add Task</button>

            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task} <button onClick={() => removeTask(task)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
