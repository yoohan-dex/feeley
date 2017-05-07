import styled, { keyframes } from 'styled-components';

const bgPanLeft = keyframes`
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
`;
const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  top: 0;
  left: 0;
  animation: ${bgPanLeft} 8s ease 0s infinite normal both;
  background-image: url('/images/overlay.png') linear-gradient(270deg,#4F3354,#3F4354,#2F3354);
`;

export default Background;
