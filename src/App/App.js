import Buttons from "./Buttons";
import Form from "./Form";
import Tasks from "./Tasks";
import Section from "./Section";
import Header from "./Header";
import Footer from "./Footer";
import Container from "./Container";
import { useTasks } from "./useTasks";
import { ThemeProvider } from "styled-components";


export function App() {

  const [
    tasks,
    hideDone,
    toggleHideDone,
    addNewTask,
    setAllDone,
    toggleTaskDone,
    removeTask,
  ] = useTasks();

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