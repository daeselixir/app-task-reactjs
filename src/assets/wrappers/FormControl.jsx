import styled from "styled-components";

export const FormControl = styled.div`
  /* border: 1px solid green; */
  width: 80%;
  height: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 500px) {
    width: 100%;
    /* padding: 1rem; */
  }
`;

export const InputStyle = styled.input`
  border: 2px solid white;
  border-radius: 5px;
  padding: 0.7rem;
  transition: all 0.3s;
  width: 100%;
  color: #707070;

  &:focus {
    border-bottom: 2px solid #5862f7;
    outline: none;
    color: #707070;
  }

  &::placeholder {
    font-size: 14px;
    font-weight: lighter;
    color: #b8b9bb;
  }
`;