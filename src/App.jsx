import React from "react";
import AppDesign from "./assets/wrappers/AppDesign";
import Container from "./assets/wrappers/Container";
import Header from "./components/Header/Wrapper";
import Main from "./components/Main/Wrapper";
import Pagination from "./components/Footer/Pagination";

const App = () => {
  return (
    <AppDesign>
      <h1 className="titleApp">List Task's - React JS</h1>
      <Container>
        <Header />
        {/* {!==} */}
        <Main />
        <Pagination />
      </Container>
    </AppDesign>
  );
};

export default App;
