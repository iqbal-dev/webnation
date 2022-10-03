import styled from "styled-components";
import ErrorMessage from "../../UI/froms/ErrorMessage";
import Inputs from "../../UI/froms/Inputs";
import Labels from "../../UI/froms/Labels";

const Container = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const InputGroup = ({
  label,
  name,
  value,
  placeholder,
  error,
  onChange,
  onFocus,
  onBlur,
}) => {
  return (
    <Container>
      <Labels htmlFor={name}>{label}</Labels>
      <Inputs
        name={name}
        id={name}
        placeholder={placeholder ?? ""}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        error={error}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default InputGroup;
