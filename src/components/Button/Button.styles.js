import styled from 'styled-components';

export const Wrapper = styled.button`
  display: block;
  width: 25%;
  min-width: 200px;
  height: 60px;
  margin: 20px auto;
  font-size: var(--fontBig);
  color: var(--white);
  cursor: pointer;
  background: var(--darkGrey);
  border: 0;
  border-radius: 30px;
  outline: none;
  transition: all 0.3s;

  :hover {
    opacity: 0.8;
  }
`;
