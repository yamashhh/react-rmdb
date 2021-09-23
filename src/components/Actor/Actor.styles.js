import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 5px;
  color: var(--white);
  text-align: center;
  background: var(--darkGrey);
  border-radius: 20px;

  h3 {
    margin-top: 10px;
  }

  p {
    margin: 5px 0;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 15px;
`;
