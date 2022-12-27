import "./style.css";

const Tasks = ({ tasks, hideDoneTasks }) => (
    <ul className="list__main">
        {tasks.map(task => (
            <li
                className={`list__tasks${task.done && hideDoneTasks ? " list__item--hide" : ""}`}
                key={task.id}>
                <button className="list__doneButton">
                    {task.done ? "✓" : ""}
                </button>
                <div className={`list__task${task.done ? " list__tasks--lineThrough" : ""}`}>
                    {task.content}
                </div>
                <button className="list__removeButton">
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;