import styled from "styled-components";

interface ContainerButtonPaginationProps {
  isSelected?: boolean;
}

export const ContainerButtonPagination = styled.div<ContainerButtonPaginationProps>`
  display: flex;
  justify-content: center;
  font-family: Roboto;
  margin-top: 15px;
  color: #ffffff;

  ul {
    display: flex;
    gap: 4px;
    margin: 0px 3px 0px 3px;
    max-width: 266px;
    overflow: auto;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }

  .buttonSide {
    background-color: transparent;
    height: 50px;
    width: 50px;
    border: solid 1px #811ac0;
    border-radius: 50%;
    color: #979090;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    height: 50px;
    width: 50px;
    border: solid 1px #811ac0;
    border-radius: 50%;
    color: #d4d4d4;
    cursor: pointer;
    background-color: transparent;
  }

  .selected {
    background-color: #811ac0;
    color: #ffffff;
  }
`;
