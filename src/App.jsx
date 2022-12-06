import { useState, useEffect } from "react";
import AppDesign from "./assets/wrappers/AppDesign";
import Container from "./assets/wrappers/Container";
import Header from "./components/Header/Wrapper";
import Main from "./components/Main/Wrapper";
import Pagination from "./components/Footer/Pagination";
import { v4 as uuidv4 } from "uuid";

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
  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(4);
  const [inputPage, setInputPage] = useState(1);

  // const maximo = listTareas.length / porPagina;
  const maximo = Math.ceil(listTareas.length / porPagina);

  // console.log(maximo);

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

    setEstado((s.estado = !s.estado));
    // setEstado(false);
    setTimeout(() => {
      setEstado(false);
    }, 3000);
    setListTareas([...listTareas]);
  };

  const nextPage = () => {
    setInputPage(inputPage + 1);
    setPagina(pagina + 1);
  };

  const prevPage = () => {
    setInputPage(parseInt(inputPage) - 1);
    setPagina(parseInt(pagina) - 1);
  };

  const onKeyDown = (e) => {
    if (e.keyCode == 13) {
      setPagina(parseInt(e.target.value));

      if (
        parseInt(e.target.value) < 1 || //si el numero es menor a 1 que no siga bajando
        parseInt(e.target.value) > Math.ceil(maximo) ||
        isNaN(parseInt(e.target.value))
      ) {
        setPagina(1);
        setInputPage(1);
      } else {
        setPagina(parseInt(e.target.value));
      }
    }
  };

  const onChange = (e) => {
    setInputPage(e.target.value);
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
          porPagina={porPagina}
          pagina={pagina}
          tareas={listTareas}
          removeTask={removeTask}
          taskCompleted={taskCompleted}
        />
        <Pagination
        pagina={pagina}
        onChange={onChange}
          onKeyDown={onKeyDown}
          prevPage={prevPage}
          nextPage={nextPage}
          inputPage={inputPage}
          porPagina={porPagina}
          setPagina={setPagina}
          maximo={maximo}
        />
      </Container>
    </AppDesign>
  );
};

export default App;
