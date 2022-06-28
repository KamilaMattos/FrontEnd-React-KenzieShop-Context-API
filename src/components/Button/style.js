import styled from "styled-components"

export const ButtonStyle = styled.button`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background: var(--salmon);
  height: 40px;
  width: 98%;
  border-radius: 4px;
  color: var(--white);

  &:hover {
    background-color: var(--ligth-salmon);
    transition: 0.5s;
  }
`
