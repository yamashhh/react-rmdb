import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 320px;
  padding: 20px;
  margin: 0 auto;
  color: var(--darkGrey);

  input {
    width: 100%;
    height: 30px;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid var(--darkGrey);
    border-radius: 20px;
  }

  .error {
    color: red;
  }
`;
