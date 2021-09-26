import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70px;
  color: var(--white);
  background: var(--medGrey);
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: var(--maxWidth);
  padding: 0 20px;

  span {
    padding-right: 10px;
    font-size: var(--fontMed);
    color: var(--white);

    @media screen and (max-width: 768px) {
      font-size: var(--fontSmall);
    }
  }
`;
