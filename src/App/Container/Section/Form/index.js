import "./style.css";
import { useRef, useState } from 'react';
import { FormInput, NewTask, AddButton } from "./styled";

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
    <FormInput onSubmit={onFormSubmit}>

      <NewTask
        value={newTaskContent}
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
        maxLength="60"
        ref={inputRef}
      />

      <AddButton
        onClick={focusInput}
      >
        Dodaj zadanie
      </AddButton>
    </FormInput>
  );
};

export default Form;