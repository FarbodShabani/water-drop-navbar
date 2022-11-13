import styled, { keyframes } from "styled-components";
import {
  circleHeightWidth,
  totalAmountOfCircle,
  circleVerticalMargin,
  borderRadius,
  waterBackgroundColor
} from "./utils";


const goDownKeyFrame = (start, end) => {
  if (start > end) {
    return keyframes`
    0% {
      top: ${
        circleHeightWidth *
          (totalAmountOfCircle % 2 === 0 && totalAmountOfCircle === start
            ? start - 1
            : start) +
        circleVerticalMargin * (2 * start - 1)
      }px;
      background-color: white;
      border-radius: ${borderRadius}px;
  }
  50%{
      background-color: white;
  }
  100% {
      top: ${
        circleHeightWidth * end + circleVerticalMargin * (2 * end + 1)
      }px;
      border-radius: ${borderRadius}px;
      background-color: rgb(255,116,0);
  }
    `
  } else if (start < end)
  return keyframes`
  0% {
    top: ${
      circleHeightWidth * (start + 1) +
      circleVerticalMargin * (2 * start + 1)
    }px;
    border-radius: ${borderRadius}px;
}
50%{
    border-radius: 0px ${borderRadius}px ${borderRadius}px;
}
100% {
    top: ${
      circleHeightWidth * end + circleVerticalMargin * (2 * end + 1)
    }px;
    border-radius: ${borderRadius}px;
}
  `
}

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CircleContainer = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;

const Circle = styled.div`
  width: ${circleHeightWidth}px;
  min-height: ${circleHeightWidth}px;
  -webkit-box-shadow: 0px 0px 56px -9px rgba(0, 0, 0, 0.78);
  -moz-box-shadow: 0px 0px 56px -9px rgba(0, 0, 0, 0.78);
  box-shadow: 0px 0px 56px -9px rgba(0, 0, 0, 0.78);
  border-radius: ${borderRadius}px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  font-wieght: bold;
  margin: ${circleVerticalMargin}px 0px;
  z-index: 100;
`;

const WaterDrop = styled.div`
  position: absolute;
  background-color: ${waterBackgroundColor};
  width: ${circleHeightWidth}px;
  height: ${circleHeightWidth}px;
  top: ${circleVerticalMargin}px; /*init position*/
  transform: rotate(45deg); /* ro create water drop shape*/
  border-radius: ${borderRadius}px;
  /* this part actually used for the steam animation */
  display: flex;
  align-items: center;
  justify-content: center;
  /* to have clean steam drawing*/
  overflow: hidden;
  white-space: nowrap;
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
  animation-name: ${({ keyFrameStep }) => goDownKeyFrame(keyFrameStep.start, keyFrameStep.end)};
  `;
      

const SteamContainer = styled.div`
  width: 15px;
  height: ${circleHeightWidth}px;
  border-radius: ${borderRadius}px;
  position: relative;
  /*because of the the water drop container we need to 45 deg rotate back*/
  transform: rotate(-45deg);
  opacity: ${({ opacity }) => opacity && opacity};
`;

const Steam = styled.div`
  width: 50px;
  height: 25px;
  position: absolute;
  border-radius: ${borderRadius}px;
  &:first-child {
    top: 0px;
    left: 0px;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      270deg,
      rgba(255, 255, 255, 0) 75%,
      rgba(255, 116, 0, 1) 100%
    );
    z-index: 20;
  }
  &:last-child {
    bottom: 0px;
    left: 0px;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      270deg,
      rgba(255, 255, 255, 0) 75%,
      rgba(255, 116, 0, 1) 100%
    );
  }
  &:nth-child(2) {
    right: 0px;
    top: 17.5px;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 75%,
      rgba(255, 116, 0, 1) 100%
    );
  }
`;

const Stove = styled.div`
  width: ${circleHeightWidth}px;
  height: ${circleHeightWidth}px;
  background-color: rgb(255,116,0);
  position: absolute;
  bottom: -20px;
  right: -20px;
  border-radius: ${borderRadius}px;
  transform: rotateY(-60deg) rotateX(40deg);
  opacity: ${({ opacity }) => opacity && opacity};
`;

export {
  MainContainer,
  CircleContainer,
  Circle,
  WaterDrop,
  SteamContainer,
  Steam,
  Stove
};
