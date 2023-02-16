import Buttons from "./Container/Section/Buttons";
import Form from "./Container/Section/Form";
import Tasks from "./Container/Section/Tasks";
import Section from "./Container/Section";
import Header from "./Container/Header";
import Footer from "./Container/Footer";
import Container from "./Container";
import { useEffect, useState } from 'react';

export function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []);


  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone)
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }
      return task;
    }));
  };

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task,
      done: true,
    })));
  };

  const addNewTask = (content) => {
    if (content !== "") {
      return (
        setTasks(tasks => [
          ...tasks,
          {
            content,
            done: false,
            id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
          },
        ]));
    }
  };

  return (
    <Container>
      <Header title="Lista zadań" />

      <Section
        title="Dodaj nowe zadanie"
        body={<Form
          addNewTask={addNewTask}
        />}
      />

      <Section
        title="Lista zadań"
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />}

        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />}
      />

      <Footer
        title="Tomasz Szkudlarek Made This in React app"
      />
    </Container>
  );
};

export default App;