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

//todo:
// let estado = false;
const App = () => {
  const [inputAddTask, setInputAddTask] = useState("");
  const [listTareas, setListTareas] = useState([]);
  const [estadoTask, setEstadoTask] = useState(false);
  const [pagina, setPagina] = useState(1);

  const [porPagina, setPorPagina] = useState(2);
  const [inputPage, setInputPage] = useState(1);

  var maximo = Math.ceil(listTareas.length / porPagina);
// 4/2=2 3/2=1 
  const handleChange = (e) => {
    setInputAddTask(e.target.value);
  };

  const onChange = (e) => {
    setInputPage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputAddTask === "") {
      return;
    }

    setListTareas([
      ...listTareas,
      {
        id: uuidv4(),
        input: inputAddTask,

        mes: mes,
        day: day,
        fecha: capitalize(newD),
        estado: estadoTask,
      },
    ]);

    setInputAddTask("");
  };

  const taskCompleted = (task) => {
    const s = listTareas.find((tarea) => tarea.id === task);

    setEstado((s.estadoTask = !s.estadoTask));

    setTimeout(() => {
      setEstadoTask(false);
    }, 3000);
    setListTareas([...listTareas]);
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

  const nextPage = () => {
    setInputPage(parseInt(inputPage) + 1);
    setPagina(parseInt(pagina) + 1);
  };

  const prevPage = () => {
    setInputPage(parseInt(inputPage) - 1);
    setPagina(parseInt(pagina) - 1);
  };

  return (
    <AppDesign>
      <h1 className="titleApp">List Task's - React JS</h1>

      <Container>
        <Header
          value={inputAddTask}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <Main
          pagina={pagina}
          porPagina={porPagina}
          listTareas={listTareas}
          taskCompleted={taskCompleted}
          setListTareas={setListTareas}
          maximo={maximo}
          setInputPage={ setInputPage}
          setPagina={setPagina}
          inputPage={inputPage}
          prevPage={prevPage}
        
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
