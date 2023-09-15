import styled from "styled-components";

export const ContainerDashBoard = styled.div`
  .title {
    font-family: Roboto;
    font-weight: 700;
    font-size: 32px;
    color: #ffffff;

    display: flex;
    justify-content: center;
  }

  .containerSearch {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  @media (min-width: 1024px) {
    .containerSearch {
      justify-content: end;
    }
  }
`;
