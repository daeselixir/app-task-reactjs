import styled from "styled-components";

const AppDesign = styled.div`
  /* border: 1px solid greenyellow; */
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  background: #d3d3dd;
  height: 100vh;
  padding: 1rem;

  .titleApp {
    color: #aeafb373;
    font-size: 64px;
    margin-top: 3rem;
  }

  @media only screen and (max-width: 700px) {
    .titleApp {
      font-size: 32px;
    }

    @media only screen and (max-width: 500px) {
      .titleApp {
        margin-top: 0.5rem;
        padding: 0.5rem;
        font-size: 24px;
      }
    }
  }
`;

export default AppDesign;
