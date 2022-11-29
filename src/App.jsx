import { useState, useEffect } from "react";
import AppDesign from "./assets/wrappers/AppDesign";
import Container from "./assets/wrappers/Container";
import Header from "./components/Header/Wrapper";
import Main from "./components/Main/Wrapper";
import Pagination from "./components/Footer/Pagination";

let max = 18989;
const randomID = Math.floor(Math.random() * max);

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

const App = () => {
  const [inputSearch, setInputSearch] = useState("");
  const [listTareas, setListTareas] = useState([]);

  const handleChange = (e) => {
    setInputSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setListTareas([
      ...listTareas,
      {
        id: randomID,
        input: inputSearch,
        mes: mes,
        day: day,
        fecha: capitalize(newD),
      },
    ]);

    setInputSearch("");
  };

  return (
    <AppDesign>
      <h1 className="titleApp">List Task's - React JS</h1>
      <Container>
        <Header
          value={inputSearch}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        {/* {!==} */}
        <Main tareas={listTareas} />
        {/* <Pagination /> */}
      </Container>
    </AppDesign>
  );
};

export default App;
