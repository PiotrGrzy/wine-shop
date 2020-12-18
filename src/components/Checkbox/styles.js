import styled from "styled-components"

export const StyledCheckboxWrapper = styled.div`
  font-size: 1.6rem;
  margin: 1rem 0;
  width: 100%;
  /* padding-left: 2rem; */
  label {
    display: flex;
    align-items: center;
  }
  span {
    margin-right: 1rem;
  }
`

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`
export const StyledCheckbox = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  border: 2px solid
    ${props => (props.checked ? "var(--primary)" : "var(--grey)")};
  background: var(--white);
  border-radius: 3px;

  transition: all 150ms;
`
