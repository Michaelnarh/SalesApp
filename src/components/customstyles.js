import styled from "../../node_modules/styled-components/dist/styled-components";
const ButtonContainer = styled.div`
  border: 1px var(--mainOrange) solid;
  border-radius: 10px;
  color: var(--mainBlue);
  margin: 5px 6px;
  padding: 8px;
  &:hover {
    background-color: var(--lightBlue);
  }
`;
export default ButtonContainer;
