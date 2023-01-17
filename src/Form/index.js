import "./style.css";
import { useState } from 'react';

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
  };

  return (
    <form className="form__input" onSubmit={onFormSubmit} >
      <input
        value={newTaskContent}
        className="form__newTask"
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
        maxLength="60"
      />
      <button
        className="form__addButton"
      >
        Dodaj zadanie
      </button>
    </form >
  );
};

export default Form;