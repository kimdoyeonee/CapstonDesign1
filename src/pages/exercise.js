// Exercise.js (React 컴포넌트)

import React, { useState } from "react";
import { Container, SignupFormContainer, Title } from "../styles/SignupStyle";

const Exercise = () => {
  const [exerciseTime, setExerciseTime] = useState(0);
  const [exerciseDistance, setExerciseDistance] = useState(0);

  // 임시 데이터 사용 (실제 아두이노 데이터 수신 부분은 여기에 구현해야 함)
  const fetchExerciseData = () => {
    // 아두이노에서 데이터를 받아올 경우, 이 함수 내에서 데이터 수신 로직을 구현
    // 예시 데이터 (임시)
    const tempTime = 60; // 운동 시간 (분)
    const tempDistance = 5.0; // 운동 거리 (km)
    setExerciseTime(tempTime);
    setExerciseDistance(tempDistance);
  };

  // 컴포넌트가 마운트될 때 데이터를 받아오도록 설정
  React.useEffect(() => {
    fetchExerciseData(); // 임시 데이터를 받아오는 함수 호출
  }, []);

  return (
    <Container>
      <SignupFormContainer>
        <Title>운동 데이터 조회</Title>
        <div>
          <p>최근 운동 시간: {exerciseTime} 분</p>
          <p>최근 운동 거리: {exerciseDistance} km</p>
        </div>
      </SignupFormContainer>
    </Container>
  );
};

export default Exercise;
