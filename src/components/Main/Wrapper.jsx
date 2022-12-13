import { useState, useEffect } from "react";
import Task from "./Task";
import { Main } from "../../assets/wrappers/Main";

const Wrapper = ({
  setPagina,
  tareas,
  removeTask,
  taskCompleted,
  porPagina,
  pagina,
  maximo,
  setListTareas,
}) => {



  return (
    <Main>
      <p>Main</p>
      <Task
        setPagina={setPagina}
        porPagina={porPagina}
        pagina={pagina}
        tareas={tareas}
        removeTask={removeTask}
        taskCompleted={taskCompleted}
        maximo={maximo}
        setListTareas={setListTareas}
      />
    </Main>
  );
};

export default Wrapper;
