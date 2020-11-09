import styled from "styled-components"

const StyledForm = styled.form`
  ${({ grid }) =>
    grid
      ? {
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }
      : { display: "flex", flexDirection: "column" }}

  padding: 2rem;
  align-items: center;
  justify-content: center;
  max-width: 1000px;
  background-color: var(--white);
  font-size: 1.4rem;
  box-shadow: var(--box-shadow);
  border: radius;

  /* background: -webkit-linear-gradient(
    to right,
    var(--primary),
    var(--primary-light),
    var(--primary)
  );
  background: linear-gradient(
    to right,
    var(--primary),
    var(--primary-light),
    var(--primary)
  );
   */
  .input-container {
    position: relative;
    background-color: var(--white);
    padding: 1rem 4rem;
  }

  .validation-error {
    color: #961818;
    margin-top: 0.5rem;
  }

  label {
    font-weight: 700;
    color: var(--primary);
    display: block;
    margin-bottom: 0.5rem;
  }
  input {
    outline: none;
    padding: 0.5rem;
    font-size: 1.6rem;
    border: 2px solid #a0a0a0;
    border-radius: 5px;
  }
  input:active,
  input:focus {
    border: 2px solid var(--secondary);
  }

  .form-btn,
  .form-link {
    grid-column: 1 / -1;
    justify-self: center;
  }
  .error-msg {
    grid-row: 6/7;
    grid-column: span 2;
  }
  .form-link {
    grid-row: 8/9;
  }
  .form-btn {
    grid-row: 7/8;
  }
`
export default StyledForm
