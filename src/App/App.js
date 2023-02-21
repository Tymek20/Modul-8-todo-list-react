import Buttons from "./Container/Section/Buttons";
import Form from "./Container/Section/Form";
import Tasks from "./Container/Section/Tasks";
import Section from "./Container/Section";
import Header from "./Container/Header";
import Footer from "./Container/Footer";
import Container from "./Container";
import { useTasks } from "./useTasks";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

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
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
};

export default App;