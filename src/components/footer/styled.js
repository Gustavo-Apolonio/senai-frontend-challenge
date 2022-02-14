import styled from "styled-components";

import { BlackPiano } from "../../assets/styles/defaultStyled";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: calc(2.5vh - 10px);
  width: calc(100% - 10px);

  padding: 5px;

  background-color: ${BlackPiano};
  color: #fff;
`;
