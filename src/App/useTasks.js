import { useLocalStorageState } from "./useLocalStorageState";
import { useState } from "react";

export const useTasks = () => {

    const [tasks, setTasks] = useLocalStorageState("tasks", []);

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

    const [hideDone, setHideDone] = useState(false);

    const toggleHideDone = () => {
      setHideDone(hideDone => !hideDone)
    };

    return [tasks,hideDone, toggleHideDone, addNewTask, setAllDone, toggleTaskDone, removeTask];
};