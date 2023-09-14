import styled from "styled-components";

export const ContainerListUser = styled.div`
  display: flex;
  margin-top: 10px;
  overflow: scroll;

  ul {
    width: max-content;
  }

  .columnLi {
    color: #ffffff;
    font-family: Poppins;
    background-color: #811ac0;
    width: 100px;
    margin-right: 3px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  li {
    color: #d6d6d6;
    font-family: Poppins;
    height: 50px;
    width: 200px;

    display: flex;
    align-items: center;
  }
`;
