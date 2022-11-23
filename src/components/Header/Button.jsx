import styled from "styled-components";

const ButtonAgregar = styled.button`
/* width:100%; */
  background: #5862f7;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.5s;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: #2e359b;
    transform: scale(1.2);

  }

  .icon {
    height: 16px;
    width: 16px;
    fill: white;
    transition: all 0.5s;

    &:hover {
      transform: rotate(90deg);
    }
  }
`;

function Button() {
  return (
    <ButtonAgregar>
      <svg
        className="icon"
        viewBox="0 0 21 22"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.7083 12.4583H11.9583V21.2083H9.04163V12.4583H0.291626V9.54166H9.04163V0.791656H11.9583V9.54166H20.7083V12.4583Z"
          fill="white"
        />
      </svg>
    </ButtonAgregar>
  );
}

export default Button;
