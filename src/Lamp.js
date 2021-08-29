import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 20px;
  left: ${(props) => (props.position === 'left' ? '20px' : '380px')};
  width: 100px;
  height: 100px;
  background: ${(props) => (props.lampOn ? 'orange' : 'lightgrey')};
  border-radius: 50%;
`;

export default function Lamp({ lampOn, position }) {
  return (
    <Wrapper lampOn={lampOn} position={position}>
      <div />
    </Wrapper>
  );
}
