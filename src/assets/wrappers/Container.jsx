import styled from "styled-components";

const Container = styled.div`
  /* border: 1px solid red; */
  border-radius: 8px;
  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.1);
  background: #eef1f6;
  /* position: relative; */
  width: calc(100% - 50%);
  height: 70%;

  display: flex;
  flex-direction: column;
justify-content: space-between;
  align-items: center;
  overflow: hidden;

  .tarea:first-child {
    border: 1px solid red;
    background: red;
  }

  /* justify-content: center; */

  @media only screen and (max-width: 500px) {
    height: 100%;
    gap: 0.5rem;
    width: calc(100% - 10px);
  }
`;

export default Container;
