import "./style.css"

const Buttons = ({ tasks, hideDoneTasks }) => {
    if (tasks.lenght === 0) {
        return null;
    }

    return (
        <div className="button">
            <button
                className="button__buttons">
                {hideDoneTasks ? "Pokaż " : "Ukryj "}
                ukończone
            </button>
            <button
                className="button__buttons"
                disabled={tasks.every((task) => task.done)}>
                Ukończ wszystkie
            </button>
        </div>
    )
};

export default Buttons;