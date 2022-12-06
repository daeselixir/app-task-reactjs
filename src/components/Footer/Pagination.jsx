import styled from "styled-components";

const PageNumber = styled.div`
  /* border: 1px solid red; */
  height: 3rem;
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
    color: #aeafb3;
    font-weight: bold;
  }
`;

const Pagination = ({
  porPagina,
  maximo,
  prevPage,
  setPagina,
  inputPage,
  nextPage,
  onKeyDown,
  onChange,
  pagina,
}) => {
  // console.log(porPagina, maximo);

  return (
    <PageNumber>
      <div className="">
        {/* botones */}
        <button disabled={pagina === 1 || pagina < 1} onClick={prevPage}>
          <svg
            width="13"
            height="16"
            viewBox="0 0 13 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 14L3 8L11 2"
              stroke="#BEB9B9"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
      <div className="pagination-num">
        <input
          onChange={(e) => onChange(e)}
          onKeyDown={(e) => onKeyDown(e)}
          name="inputPage"
          autoComplete="off"
          value={inputPage}
          type="text"
        />
        <p>de {maximo} </p>
      </div>
      {/* botones */}

      <div className="">
        <button
          disabled={Math.ceil(pagina === maximo) || Math.ceil(pagina > maximo)}
          onClick={nextPage}
        >
          <svg
            width="12"
            height="16"
            viewBox="0 0 12 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 2L9 8L2 14"
              stroke="#BEB9B9"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </PageNumber>
  );
};

export default Pagination;
