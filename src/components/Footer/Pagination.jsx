import PageNumber from "../../assets/wrappers/Pagination.jsx";

const Pagination = ({
  maximo,
  prevPage,
  inputPage,
  nextPage,
  onKeyDown,
  onChange,
  pagina,
}) => {
  return (
    <PageNumber>
      <div className="col">
        <div className="fila-1">
          <div className="prev">
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
          </div>
          {/* botones */}

          <div className="next">
            <button
              disabled={
                Math.ceil(pagina === maximo) || Math.ceil(pagina > maximo)
              }
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
        </div>
        <div className="maximo">
          <p>de {maximo} </p>
        </div>
      </div>
    </PageNumber>
  );
};

export default Pagination;
