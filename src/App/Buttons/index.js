import { Button, AdditionalButtonSection } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone, }) => (

  <AdditionalButtonSection>
    {tasks.length > 0 && (
      <>
        <Button
          onClick={toggleHideDone}
        >
          {hideDone ? "Pokaż " : "Ukryj "}
          ukończone
        </Button>

        <Button
          onClick={setAllDone}
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </Button>
      </>
    )}
  </AdditionalButtonSection>
);


export default Buttons;