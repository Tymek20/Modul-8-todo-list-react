import "./style.css";

const Tasks = ({ tasks, hideDoneTasks }) => (
    <ul className="tasks">
        {tasks.map(task => (
            <li
                className={`tasks__tasks${task.done && hideDoneTasks ? " tasks__item--hide" : ""}`}
                key={task.id}>
                <button className="tasks__doneButton">
                    {task.done ? "✓" : ""}
                </button>
                <div className={`tasks__task${task.done ? " tasks__tasks--lineThrough" : ""}`}>
                    {task.content}
                </div>
                <button className="tasks__removeButton">
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;