import { DoneButton, RemoveButton, NewTasks, StyledList, StyledTask } from "./styled";


const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <NewTasks>
    {tasks.map(task => (
      <StyledList
        key={task.id}
        hidden={task.done && hideDone}
      >

        <DoneButton
          onClick={() => toggleTaskDone(task.id)}
        >
          {task.done ? "✓" : ""}
        </DoneButton>

        <StyledTask
          lineThrough={task.done && toggleTaskDone}
        >
          {task.content}
        </StyledTask>

        <RemoveButton
          onClick={() => removeTask(task.id)}
        >
          🗑
        </RemoveButton>
      </StyledList>
    ))}
  </NewTasks>
);

export default Tasks;