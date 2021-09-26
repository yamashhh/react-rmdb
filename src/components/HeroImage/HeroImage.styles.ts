import styled from 'styled-components';

export const Wrapper = styled.div<{ image: string }>`
  position: relative;
  height: 600px;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 41%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url(${({ image }) => image}), var(--darkGrey);
  background-position: center;
  background-size: 100%, cover;
  animation: animateHeroImage 1s;

  @keyframes animateHeroImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  max-width: var(--maxWidth);
  padding: 20px;
  margin: 0 auto;
`;

export const Text = styled.div`
  position: absolute;
  bottom: 40px;
  z-index: 100;
  max-width: 700px;
  min-height: 100px;
  margin-right: 20px;
  color: var(--white);

  h1 {
    font-size: var(--fontSuperBig);

    @media screen and (max-width: 720px) {
      font-size: var(--fontBig);
    }
  }

  p {
    font-size: var(--fontMed);

    @media screen and (max-width: 720px) {
      font-size: var(--fontSmall);
    }
  }

  @media screen and (max-width: 720px) {
    max-width: 100%;
  }
`;
