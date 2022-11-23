import styled from "styled-components";

const FormControl = styled.div`
  /* border: 1px solid green; */
  width: 80%;
  height: 3rem;
  /* padding: 1rem; */
/* margin: 1rem; */

  display: flex;
  justify-content: center;
  align-items: center;
  /* gap: 1rem; */

  @media only screen and (max-width: 500px) {
    width: 100%;
    /* padding: 1rem; */
  }
`;

const InputStyle = styled.input`
  border: 2px solid white;
  border-radius: 5px;
  padding: 0.7rem;
  transition: all 0.3s;
  width: 100%;

  &:focus {
    border-bottom: 2px solid #5862f7;
    outline: none;
  }

  &::placeholder {
    font-size: 14px;
    font-weight: lighter;
    color: #b8b9bb;
  }

`;

const Input = () => {
  return (
    <FormControl>
      <InputStyle placeholder="Add Task..." />
    </FormControl>
  );
};

export default Input;
