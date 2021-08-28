import { useState } from 'react';
import styled from 'styled-components';
import Lamp from './Lamp';
import LightSwitch from './LightSwitch';

const RoomDiv = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  margin: 0 auto;
  border: 10px solid black;
`;

function Room() {
  const [isLampOneOn, setIsLampOneOn] = useState(false);
  const [isLampTwoOn, setIsLampTwoOn] = useState(true);

  function handleLightSwitchOne() {
    return setIsLampOneOn((prev) => !prev);
  }

  function handleLightSwitchTwo() {
    return setIsLampTwoOn((prev) => !prev);
  }

  return (
    <RoomDiv>
      <Lamp lampOn={isLampOneOn} position="left" />
      <Lamp lampOn={isLampTwoOn} position="right" />
      <LightSwitch
        name="one"
        callback={handleLightSwitchOne}
        switchOn={isLampOneOn}
        position="left"
      />
      <LightSwitch
        name="two"
        callback={handleLightSwitchTwo}
        switchOn={isLampTwoOn}
        position="right"
      />
    </RoomDiv>
  );
}

export default Room;
