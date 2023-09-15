import styled from "styled-components";

export const ContainerListUser = styled.div`
  display: flex;
  margin-top: 10px;
  overflow: scroll;
  overflow-y: hidden;

  ul {
    width: max-content;
  }

  .columnTables {
    margin-right: 5px;
    position: sticky;
    left: 0;
    z-index: 1;
  }

  .columnLi {
    color: #ffffff;
    font-family: Poppins;
    background-color: #811ac0;
    width: 100px;
    gap: 3px;

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

  @media (min-width: 1024px) {
    flex-direction: column;
    overflow: hidden;

    .columnTables {
      display: flex;
      width: 100%;
      margin-right: 0;
    }

    li {
      width: 100%;
      justify-content: center;
      height: 37px;
    }

    .columnLi {
      width: 100%;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    .columnData {
      display: flex;
      width: 100%;
    }
  }
`;
