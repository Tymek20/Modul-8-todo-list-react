import "./style.css"

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => {
  if (tasks.lenght === 0) {
    return null;
  }

  return (
    <div className="button">
      <button
        onClick={toggleHideDone}
        className="button__buttons"
      >
        {hideDone ? "Pokaż " : "Ukryj "}
        ukończone
      </button>
      <button
        onClick={setAllDone}
        className="button__buttons"
        disabled={tasks.every(({ done }) => done)}
      >
        Ukończ wszystkie
      </button>
    </div>
  )
};

export default Buttons;