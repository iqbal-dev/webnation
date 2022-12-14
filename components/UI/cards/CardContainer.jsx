import styled from "styled-components";

const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 0.4rem;
  overflow: hidden;
  cursor: pointer;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 1rem;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export default CardContainer;
