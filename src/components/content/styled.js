import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Contenter = styled.div`
  height: calc(100vh - (5vh + 2.5vh + 10px));
  width: calc(100% - 10px);

  padding: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
