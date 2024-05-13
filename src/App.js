import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import NavigationBar from "./pages/NaviBar";
import Exercise from "./pages/exercise";
// import RingImage from "./styles/bt.png";
import Detail from "./styles/detail.png";
import { Container, SignupFormContainer, Title } from "./styles/SignupStyle";
import { Typography } from "@material-ui/core";
import MyComponent from "./MyComponent";


const App = () => {
  const [goalPercentage, setGoalPercentage] = useState(0); // 목표 활동량 달성률 상태

  // const tabImageStyle = {
  //   width: "80%",
  //   height: "80%",
  //   margin: "7px",
    
  // };

  // const handleRingImageClick = () => {
  //   // Bluetooth로 아두이노에 'f' 명령 전송
  //   sendCommandToArduino("f");
  // };

  // const sendCommandToArduino = (command) => {
  //   // 아두이노와의 Bluetooth 통신을 위한 코드
  //   const bluetoothSerial = new window.SerialPort("COM1", { baudRate: 9600 }); // 시리얼 포트 연결
  //   bluetoothSerial.write(command); // 명령 전송
  //   bluetoothSerial.close(); // 포트 닫기
  // };

  const dimageClick = () => {
    window.location.href = "./exercise";
  };

  const dimage = {
    width: "40px",
    height: "40px",
    marginLeft: "15px",
  };

  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/exercise" element={<Exercise setGoalPercentage={setGoalPercentage} />} />
      </Routes>
      <Container>
        <SignupFormContainer>
          <div style={{ display: "flex", alignItems: "center" , justifyContent: "center"}}>
            <Title>
              오늘의 목표 활동량의 <br></br>

              <Typography variant="inherit" style={{ color: "blue" }}>
                {goalPercentage}%
              </Typography>
              를 달성했습니다.
            </Title>
            <img src={Detail} alt="detail" style={dimage} onClick={dimageClick} />
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            {/* RingImage를 가운데 정렬 */}
            {/* <img src={RingImage} alt="Ring" style={tabImageStyle} onClick={handleRingImageClick} /> */}

             <MyComponent />
          </div>
        </SignupFormContainer>
      </Container>
    </div>
  );
};

export default App;
