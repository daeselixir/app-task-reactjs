import styled from "styled-components";


const PageNumber = styled.div`
  /* border: 1px solid red; */
  height: 5rem;
  width: 50%;

  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  button {
    border: none;
    cursor: pointer;

    :disabled {
      stroke: #2f52df;
    }
  }

  svg .btnPrev {
    background-color: red;
    stroke: #2f52df;
  }

  .pagination-num {
    width: 40%;
    color: #aeafb3;
    font-weight: bold;
  }

  .pagination-num input {
    border: none;
    padding: 5px;
    width: 30%;
    color: #909191;
    text-align: center;
  }

  .col {
    /* border: 2px solid green; */
    display: flex;
    flex-direction: column;

    align-items: center;
    gap: 0.5rem;
  }

  .fila-1 {
    /* border: 1px solid blue; */
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .prev button,
  .next button {
    display: flex;
    align-items: center;
    justify-content: center;

    align-self: center;
    justify-content: center;
  }

  .fila-1 div {
    align-items: center;
  }

  .maximo {
    /* border: 1px solid red; */
    height: 100%;
  }

  .maximo p {
    color: #aeafb3;
    margin: 0;
  }
`;

export default PageNumber;
