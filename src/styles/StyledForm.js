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
  width: 95%;
  max-width: 1000px;
  margin: 2rem auto;
  box-shadow: var(--box-shadow);
  background-color: var(--bg-backdrop-white);
  font-size: 1.4rem;

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
  }

  label {
    font-weight: 700;
    /* color: var(--white); */
    display: block;
    margin-bottom: 0.5rem;
  }
  input {
    padding: 0.5rem;
    font-size: 1.4rem;
  }
`
export default StyledForm
