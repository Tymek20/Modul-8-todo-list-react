import "./style.css";

const usun = () => console.log("Kliknięto w kosz!");

const Tasks = ({ tasks, hideDone }) => (
    <ul className="tasks">
        {tasks.map(task => (
            <li
                className={`tasks__tasks${task.done && hideDone ? " tasks__item--hide" : ""}`}
                key={task.id}>
                <button className="tasks__doneButton">
                    {task.done ? "✓" : ""}
                </button>
                <div className={`tasks__task${task.done ? " tasks__tasks--lineThrough" : ""}`}>
                    {task.content}
                </div>
                <button
                    className="tasks__removeButton"
                    onClick={usun}
                >
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;