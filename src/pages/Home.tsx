import React, { useState } from "react";

import { Header } from "../components/Header";
import { MyTasksList } from "../components/MyTasksList";
import { TodoInput } from "../components/TodoInput";

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    if (!newTaskTitle) return;

    const newTask = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    };

    setTasks((prevState) => [...prevState, newTask]);
  }

  function handleMarkTaskAsDone(id: number) {
    //TODO - mark task as done if exists
    const newArrayTasksDone: Task[] = tasks.map((task) => {
      if (task.id === id) task.done = true;
      return task;
    });

    setTasks(newArrayTasksDone);
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    const newArrayTasksRemove: Task[] = tasks.filter((task) => task.id !== id);

    setTasks(newArrayTasksRemove);
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </>
  );
}
