import styled from 'styled-components';

const Button = styled.button`
  position: absolute;
  bottom: 20px;
  left: ${(props) => (props.position === 'left' ? '20px' : '380px')};
  width: 100px;
  height: 50px;
  color: black;
  cursor: pointer;
  background: white;
  border: 1px solid black;
  border-radius: 10px;
`;

export default function LightSwitch({ callback, position, switchOn }) {
  return (
    <Button onClick={callback} position={position}>
      {switchOn ? 'On' : 'Off'}
    </Button>
  );
}
