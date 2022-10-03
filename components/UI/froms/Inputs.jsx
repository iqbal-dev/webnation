import styled from "styled-components";

const Inputs = styled.input`
  width: 100%;
  border: ${(props) =>
    props.error ? "1px solid #ff0000" : "1px solid #efefef"};
  outline: none;
  padding: 0.5rem;
  background: transparent;
  font-size: 0.9rem;
  font-family: Arial;
  color: #333;
  border-radius: 0.25rem;
  &:focus {
    border: 1px solid skyblue;
  }
`;

export default Inputs;
