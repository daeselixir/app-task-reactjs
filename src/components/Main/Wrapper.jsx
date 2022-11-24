import { useState, useEffect } from "react";
import Task from "./Task";
import { Main } from "../../assets/wrappers/Main";

const Wrapper = ({ tarea }) => {
  const [listTask, setListTask] = useState(tarea);

  useEffect(() => {
    setListTask(listTask);
  }, [tarea]);

  return (
    <Main>
      <Task />
    </Main>
  );
};

export default Wrapper;
