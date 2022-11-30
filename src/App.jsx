import { useState, useEffect } from "react";
import AppDesign from "./assets/wrappers/AppDesign";
import Container from "./assets/wrappers/Container";
import Header from "./components/Header/Wrapper";
import Main from "./components/Main/Wrapper";
import Pagination from "./components/Footer/Pagination";
import { v4 as uuidv4 } from "uuid";
import { set } from "date-fns";

const capitalize = (palabra) => {
  return palabra.charAt(0).toUpperCase() + palabra.slice(1);
};

const newD = new Date().toLocaleDateString("es", {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric",
});

const mes = new Date().toLocaleDateString("es", { month: "short" });
const day = new Date().toLocaleDateString("es", { day: "numeric" });

// let estado = false;
const App = () => {
  const [inputSearch, setInputSearch] = useState("");
  const [listTareas, setListTareas] = useState([]);
  const [estado, setEstado] = useState(false);

  const handleChange = (e) => {
    setInputSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputSearch === "") {
      return;
    }

    setListTareas([
      ...listTareas,
      {
        id: uuidv4(),
        input: inputSearch,
        mes: mes,
        day: day,
        fecha: capitalize(newD),
        estado: estado,
      },
    ]);

    setInputSearch("");
  };

  const removeTask = (task) => {
    // console.log(task);
    const filtred = listTareas.filter((tarea) => tarea.id !== task);

    setListTareas([...filtred]);
  };

  const taskCompleted = (task) => {
    const s = listTareas.find((tarea) => tarea.id === task);

    setEstado(s.estado = !s.estado);
    // setEstado(false);
    setTimeout(() => {
      setEstado(false);
    }, 3000);
    setListTareas([...listTareas]);
  };



  return (
    <AppDesign>
      <h1 className="titleApp">List Task's - React JS</h1>
      {/* <p>{estado ? "true" : "false"} </p> */}
      <Container>
        <Header
          value={inputSearch}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />

        <Main
          tareas={listTareas}
          removeTask={removeTask}
          taskCompleted={taskCompleted}
        />
        {/* <Pagination /> */}
      </Container>
    </AppDesign>
  );
};

export default App;
