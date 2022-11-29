import { useState, useEffect } from "react";
import Task from "./Task";
import { Main } from "../../assets/wrappers/Main";

const Wrapper = ({ tareas }) => {

  return (
    <Main>
      <Task tareas={tareas} />
    </Main>
  );
};

export default Wrapper;
