import Buttons from "./Buttons";
import Form from "./Form";
import Tasks from "./Tasks";
import Section from "./Section";
import Header from "./Header";
import Footer from "./Footer";
import Container from "./Container";

const tasks = [
  { id: 1, content: "Przejść na Reacta", done: false },
  { id: 2, content: "Szkolić się mimo braku chęci :D", done: true },
];

const hideDoneTasks = false;

function App() {
  return (
    <Container>
      <Header title="Lista zadań" />

      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />

      <Section
        title="Lista zadań"
        body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        extraHeaderContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
      />

      <Footer title="Tomasz Szkudlarek Made This 2022/2023" />
    </Container>
  );
}

export default App;