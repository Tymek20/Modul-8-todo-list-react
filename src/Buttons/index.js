import "./style.css"

const Buttons = ({ tasks, hideDone }) => {
    if (tasks.lenght === 0) {
        return null;
    }

    return (
        <div className="button">
            <button
                className="button__buttons">
                {hideDone ? "Pokaż " : "Ukryj "}
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