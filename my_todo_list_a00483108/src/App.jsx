import { useState, useEffect, useCallback } from 'react';
import './App.css';

function App() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [priority, setPriority] = useState("Medium");

    // Load tasks from localStorage on mount
    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        setTasks(savedTasks);
    }, []);

    // Save tasks to localStorage whenever tasks change
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    // Add a new task
    const addTask = useCallback(() => {
        if (newTask.trim() === "" || tasks.some(task => task.text === newTask.trim())) return;
        setTasks(prevTasks => [...prevTasks, { text: newTask.trim(), completed: false, priority }]);
        setNewTask("");
        setPriority("Medium");
    }, [newTask, tasks, priority]);

    // Toggle task completion
    const toggleTask = useCallback((index) => {
        setTasks(prevTasks =>
            prevTasks.map((task, i) => i === index ? { ...task, completed: !task.completed } : task)
        );
    }, []);

    // Change task priority
    const changePriority = useCallback((index, newPriority) => {
        setTasks(prevTasks =>
            prevTasks.map((task, i) => i === index ? { ...task, priority: newPriority } : task)
        );
    }, []);

    // Delete a task
    const deleteTask = useCallback((index) => {
        setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));
    }, []);

    return (
        <div className="todo-container">
            <h1 className="title">To-Do List</h1>
            <div className="input-container">
                <input
                    type="text"
                    className="task-input"
                    placeholder="Enter a new task..."
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && addTask()}
                    aria-label="Task input"
                />
                <select value={priority} onChange={(e) => setPriority(e.target.value)} className="priority-select">
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
                <button onClick={addTask} className="add-button">Add</button>
            </div>
            <ul className="task-list">
                {tasks.map((task, index) => (
                    <li key={index} className={`task-item ${task.priority.toLowerCase()}`}>
                        <label className="task-label">
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => toggleTask(index)}
                                aria-label={`Mark ${task.text} as ${task.completed ? "incomplete" : "complete"}`}
                            />
                            <span className={task.completed ? "completed-task" : ""}>
                                {task.text}
                                <span className="priority-badge">{task.priority}</span>
                            </span>
                        </label>
                        <select
                            value={task.priority}
                            onChange={(e) => changePriority(index, e.target.value)}
                            className="priority-select"
                        >
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                        <button onClick={() => deleteTask(index)} className="delete-button" aria-label={`Delete ${task.text}`}>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
