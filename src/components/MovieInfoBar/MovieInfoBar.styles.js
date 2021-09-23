import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 100px;
  padding: 0 20px;
  background: var(--darkGrey);
`;

export const Content = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  max-width: var(--maxWidth);
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: 20px 0;
  }

  .column {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    background: var(--medGrey);
    border-radius: 20px;
  }
`;
