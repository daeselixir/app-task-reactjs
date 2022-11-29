import { useState, useEffect } from "react";
import Task from "./Task";
import { Main } from "../../assets/wrappers/Main";

const Wrapper = ({ tareas ,removeTask}) => {

  return (
    <Main>
      <Task tareas={tareas} removeTask={removeTask} />
    </Main>
  );
};

export default Wrapper;
