import styled from "styled-components";

export const TaskStyle = styled.div`
  /* border: 1px solid red; */

  display: flex;
  flex-direction: row;
  /* justify-content: space-evenly; */
  align-items: center;

  gap: 0.3rem;
  padding: 0.4rem 0.6rem;

  .fecha {
    /* border: 1px solid red; */
    width: 3rem;

    font-size: 14px;
    text-align: center;

    p {
      color: #908c8c;
      font-weight: 100;
      margin: inherit;
    }

    span {
      color: #414246;
      font-size: 18px;
      font-weight: bold;
    }
  }

  .tarea {
    /* border: 1px solid green; */

    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-color: white;
    border-left: 3px solid #5862f7;
    padding: 8px;
    transition: all 0.2s;
    max-height: 4rem;

    display: flex;
    flex-direction: column;
    flex: 1;

    p {
      color: #414246;
      font-size: 16px;
      font-weight: bold;
      margin: 0;
      /* margin-bottom: 2px; */
    }

    i {
      margin: 0;
      color: #d3d3dd;
    }
  }
  .activeTask i,
  .activeTask p {
    color: #fff;
  }
  .activeTask {
    background-color: #65eb7b;
    border-left: 3px solid #4baf5c;
  }

  .button {
    /* border: 1px solid red; */

    height: 4rem;

    display: flex;
    gap: 0.5rem;

    .btn {
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
      border-radius: 5px;
      background: white;
      max-height: 100%;
      transition: all 0.4s;
      stroke: #bebaba;
    }

    .btn:hover {
      background: #5862f7;
      stroke: #e7e4e4;
    }

    /* tarea completed */

    .checkOkListo {
      stroke: #fdfdfd;
    }

    /* delete */

    .checkDelete {
      stroke: #ee2d2d;
    }

    /* activo o desactive */

    .active {
      background: #70ee85;
    }

    .desactive {
      background: red;
    }
  }

  @media only screen and (max-width: 500px) {
    /* border: 1px solid green; */
    padding: 0.4rem;
    gap: 0.4rem;

    flex-direction: column;
    align-items: stretch;

    .tarea {
      width: 100%;
      justify-content: center;
      align-items: center;
    }

    .button {
      justify-content: center;
    }

    .fecha p {
      /* margin-bottom: 1px; */
    }
  }
`;
