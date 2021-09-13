import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  padding: 0 20px;
  background: var(--darkGrey);
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  max-width: var(--maxWidth);
  height: 55px;
  margin: 0 auto;
  color: var(--white);
  background: var(--medGrey);
  border-radius: 40px;

  img {
    position: absolute;
    top: 14px;
    left: 15px;
    width: 30px;
  }

  input {
    position: absolute;
    left: 0;
    width: 95%;
    height: 40px;
    padding: 0 0 0 60px;
    margin: 8px 0;
    font-size: var(--fontBig);
    color: var(--white);
    background: transparent;
    border: 0;

    :focus {
      outline: none;
    }
  }
`;
