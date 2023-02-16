import "./style.css";
import { useRef, useState } from 'react';

console.log("Hello to all visiting developers")

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
  };

  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <form className="form__input" onSubmit={onFormSubmit} >
      <input
        value={newTaskContent}
        className="form__newTask"
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
        maxLength="60"
        ref={inputRef}
      />
      <button
        className="form__addButton"
        onClick={focusInput}
      >
        Dodaj zadanie
      </button>
    </form >
  );
};

export default Form;