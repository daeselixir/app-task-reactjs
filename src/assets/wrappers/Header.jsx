import styled from "styled-components";

export const Header = styled.form`
  /* border: 1px solid red; */

  padding: 15px;
  margin-top: 1rem;
  width: 84%;
  height: 5rem;

  display: flex;
  /* justify-content: space-around; */
  align-items: center;
  /* gap: 1rem; */
  /* margin-bottom: 1rem; */

  .form-control {
    /* border: 1px solid green; */
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .form-control.btns {
    width: auto;
  }

  .form-control.inp {
    flex: 1;
  }

  @media only screen and (max-width: 500px) {
    width: 100%;
    margin-top: 0.2rem;
    margin-bottom: 4rem;
    padding: 0px;
    /* justify-content:c; */
    gap: 0;

    /* margin-bottom: .4rem; */

    .form-control {
      /* border: 1px solid red; */
      margin: 0.4rem;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;