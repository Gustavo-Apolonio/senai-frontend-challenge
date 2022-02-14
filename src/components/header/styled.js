import styled from "styled-components";
import { BlackPiano } from "../../assets/styles/defaultStyled";

export const Container = styled.div`
  display: flex;
  height: calc(5vh - 10px);
  width: calc(100% - 10px);

  align-items: center;

  padding: 5px;

  background-color: ${BlackPiano};
  color: #fff;

  img {
    height: 100%;
    margin-right: 2em;
  }

  h1 {
    margin: 0%;
  }
`;
