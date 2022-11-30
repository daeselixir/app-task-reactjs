import { useState, useEffect } from "react";
import Task from "./Task";
import { Main } from "../../assets/wrappers/Main";

const Wrapper = ({ tareas ,removeTask,taskCompleted}) => {

  return (
    <Main>
      <Task tareas={tareas} removeTask={removeTask} taskCompleted={taskCompleted} />
    </Main>
  );
};

export default Wrapper;
