import { useState, useEffect } from "react";
// import Task from "./Task";
import { Main } from "../../assets/wrappers/Main";
import { TaskStyle } from "../../assets/wrappers/TaskStyle";

const Wrapper = ({
  listTareas,
  porPagina,
  taskCompleted,
  maximo,
  setListTareas,
  pagina,
  setInputPage,
  setPagina,
  inputPage,
  prevPage,
}) => {
  // const volverAtras =()=> {
  //   if(maximo !== inputPage){
  //     console.log('maximo es distinto de input page');
  //     setInputPage(parseInt(inputPage) - 1);
  //   setPagina(parseInt(pagina) - 1);
  //   }
  // }

  // console.log(maximo);

  // console.log(listTareas)
  const removeTask = (task) => {
    console.log(listTareas.length);
    const filtred = listTareas.filter((tarea) => tarea.id !== task);
    setListTareas(filtred);
    if (listTareas.length / pagina <= 1) {
      prevPage();
    }
    console.log(listTareas.length);

  };

  return (
    <Main>
      {listTareas
        .slice((pagina - 1) * porPagina, (pagina - 1) * porPagina + porPagina)
        .map((tarea) => {
          return (
            <TaskStyle key={tarea.id}>
              {/*1 fecha creacion */}
              <div className="fecha">
                <p>{tarea.mes} </p>
                <span>{tarea.day} </span>
              </div>
              {/*2 tareas */}
              <div className={tarea.estado ? "tarea activeTask" : "tarea"}>
                <p>{tarea.input} </p>
                <i>{tarea.fecha} </i>
              </div>
              {/*3 botones */}
              <div className="button">
                {/* btn Ok ask */}
                {/* {tarea.estado ? false : true} */}
                <button
                  type="submit"
                  onClick={() => taskCompleted(tarea.id)}
                  className={tarea.estado ? "btn active checkOkListo" : "btn"}
                  onSubmit={() => removeTask(tarea.id)}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 2L8 22L2 14.5"
                      className="checkO"
                      strokeWidth="3"
                    />
                  </svg>
                </button>

                {/* btn delete */}
                <button className="btn" onClick={() => removeTask(tarea.id)}>
                  <svg
                    width="23"
                    height="24"
                    viewBox="0 0 23 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 5L4.18056 21.3636C4.23663 22.3091 5.03056 23 6.06944 23H16.9306C17.9736 23 18.7527 22.3091 18.8194 21.3636L20 5"
                      className="checkDelete"
                      strokeWidth="2"
                    />

                    <path
                      d="M7.5 4.27273V2.22728C7.49942 2.06598 7.53783 1.90618 7.613 1.75706C7.68818 1.60795 7.79865 1.47247 7.93805 1.35841C8.07746 1.24435 8.24304 1.15397 8.42529 1.09246C8.60754 1.03095 8.80286 0.999533 9 1.00001H14C14.1971 0.999533 14.3925 1.03095 14.5747 1.09246C14.757 1.15397 14.9225 1.24435 15.0619 1.35841C15.2014 1.47247 15.3118 1.60795 15.387 1.75706C15.4622 1.90618 15.5006 2.06598 15.5 2.22728V4.27273M11.5 7.54546V19M7 7.54546L7.5 19M16 7.54546L15.5 19"
                      className="checkDelete"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </div>
            </TaskStyle>
          );
        })}
    </Main>
  );
};

export default Wrapper;
