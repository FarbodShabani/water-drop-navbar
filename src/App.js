import { useState } from "react";
import "./styles.css";
import {
  Circle,
  CircleContainer,
  MainContainer,
  SteamContainer,
  WaterDrop,
  Steam,
  Stove
} from "./styled";
import { totalAmountOfCircle } from "./utils";

export default function App() {
  const [keyFrameStep, setKeyFrameStep] = useState({ start: 0, end: 0 });
  const onCircleClick = (step) => {
    if (step !== keyFrameStep.end) {
      setKeyFrameStep( { start: keyFrameStep.end, end: step });
    }
  };
  const circleArray = [];
  const steamContainerArray = [1, 2, 3];
  for (let circleIndex = 0; circleIndex < totalAmountOfCircle; circleIndex++) {
    circleArray.push(circleIndex);
  }
  

  return (
    <MainContainer>
      <CircleContainer>
        <WaterDrop
          keyFrameStep={keyFrameStep}
        >
          {steamContainerArray.map((steamContainerIndex) => (
            <SteamContainer
              opacity={keyFrameStep.start > keyFrameStep.end ? 1 : 0}
              key={steamContainerIndex}
            >
              {steamContainerArray.map((steamIndex) => (
                <Steam key={steamIndex} />
              ))}
            </SteamContainer>
           ))} 
           <Stove opacity={keyFrameStep.start > keyFrameStep.end ? 1 : 0}/>
        </WaterDrop>
        {circleArray.map((circleElement) => (
          <Circle
            key={circleElement}
            onClick={() => onCircleClick(circleElement)}
          >
            {" "}
            +{" "}
          </Circle>
        ))}
      </CircleContainer>
    </MainContainer>
  );
}
