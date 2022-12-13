import styled from "styled-components";

export const Main = styled.div`
  border: 1px solid red;
  /* border: 1px solid green; */
  max-height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  flex: 1;

  /* gap: 1rem; */
  /* margin-top: 1rem; */

  @media only screen and (max-width: 500px) {
    .ola:first-child {
      margin-top: -6rem;
      padding: 0;
      /* border: 1px solid red; */
    }
  }
`;