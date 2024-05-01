import React from "react";
import RingImage from "../styles/bt.png";
import Detail from "../styles/detail.png";

import { Container, SignupFormContainer, Title } from "../styles/SignupStyle";

const Home = () => {
 
    const tabImageStyle = {
        width: '80%',
        height: '80%',
        margin: '7px'
      };
  
    const handleRingImageClick = () => {
        window.location.href = "./ring";
      };
      const dimageClick = () => {
        window.location.href = "./exercise";
      };

    const dimage = {
        width: '20px',
        height: '20px',
        margin: '5px'
      };

  return (
    <Container>
      <SignupFormContainer>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Title>안녕하세요, OOO님의 오늘의 목표 활동량은 0%입니다.</Title>
          <img
            src={Detail}
            alt="detail"
            style={dimage}
            onClick={dimageClick}
          />
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={RingImage}
            alt="Ring"
            style={tabImageStyle}
            onClick={handleRingImageClick}
          />
        </div>
      </SignupFormContainer>
    </Container>
  );
};

export default Home;
