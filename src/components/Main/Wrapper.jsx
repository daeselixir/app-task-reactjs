import { useState, useEffect } from "react";
import Task from "./Task";
import { Main } from "../../assets/wrappers/Main";

const Wrapper = ({ tareas, removeTask, taskCompleted, porPagina, pagina }) => {
  return (
    <Main>
      <Task
        porPagina={porPagina}
        pagina={pagina}
        tareas={tareas}
        removeTask={removeTask}
        taskCompleted={taskCompleted}
      />
    </Main>
  );
};

export default Wrapper;
