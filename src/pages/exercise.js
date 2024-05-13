import React, { useState, useEffect, useRef, useCallback } from "react";
import { Container, SignupFormContainer, Title } from "../styles/SignupStyle";
import Chart from "chart.js/auto";
import "chartjs-adapter-date-fns"; // Chart.js의 Date Adapter 추가
import exerciseImage from "../styles/exercise.png"; // 이미지 import

const Exercise = ({ setGoalPercentage }) => {
  const [exerciseData, setExerciseData] = useState([]);
  const [totalCalories, setTotalCalories] = useState(0); // 총 칼로리
  const chartRef = useRef(null); // 라인 차트를 저장할 ref
  const doughnutRef = useRef(null); // 원 그래프를 저장할 ref

  // 데이터를 불러오는 비동기 함수
  const fetchData = async () => {
    // 임시 데이터 (실제로는 API 호출 등으로 데이터를 가져와야 함)
    const tempData = [
      { time: "2022-05-01T10:00:00", duration: 60, calories: 200 },
      { time: "2022-05-02T10:00:00", duration: 40, calories: 80 },
      { time: "2022-05-03T10:00:00", duration: 30, calories: 75 },
      { time: "2022-05-04T10:00:00", duration: 50, calories: 125 },
    ];
    return tempData;
  };

  const calculateAchievementPercentage = useCallback(() => {
    const targetCalories = 500; // 목표 칼로리 (임시)
    const percentage = (totalCalories / targetCalories) * 100;
    return percentage.toFixed(1); // 소수점 2자리까지 표시
  }, [totalCalories]); // totalCalories에 의존

  useEffect(() => {
    const fetchExerciseData = async () => {
      try {
        const response = await fetchData(); // 데이터를 불러오는 비동기 함수 호출
        setExerciseData(response); // 불러온 데이터를 상태에 저장

        // 칼로리 합계 계산
        const total = response.reduce((acc, cur) => acc + cur.calories, 0);
        setTotalCalories(total);

        // 목표 달성률 전달
        if (setGoalPercentage) {
          const percentage = calculateAchievementPercentage();
          setGoalPercentage(percentage);
        }
      } catch (error) {
        console.error("데이터 불러오기 오류:", error);
      }
    };

    fetchExerciseData(); // 데이터를 불러오는 함수 호출
  }, [setGoalPercentage, calculateAchievementPercentage]); // setGoalPercentage와 calculateAchievementPercentage를 의존성 배열에 추가

  useEffect(() => {
    // exerciseData가 변경될 때마다 실행되는 useEffect
    if (exerciseData.length > 0) {
      // 라인 차트 생성
      const ctx = document.getElementById("exerciseChart");
      if (chartRef.current) {
        chartRef.current.destroy(); // 이전 차트 제거
      }
      chartRef.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: exerciseData.map((data) => data.time),
          datasets: [{
            label: "운동 시간 (분)",
            data: exerciseData.map((data) => data.duration),
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          }],
        },
        options: {
          scales: {
            x: {
              type: "time",
              time: {
                unit: "day",
                displayFormats: {
                  day: "MM-dd", // 날짜 형식 수정 (월-일)
                },
              },
              title: {
                display: true,
                text: "날짜",
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "운동 시간 (분)",
              },
            },
          },
        },
      });

      // 원 그래프 생성
      const doughnutCtx = document.getElementById("caloriesChart");
      if (doughnutRef.current) {
        doughnutRef.current.destroy(); // 이전 차트 제거
      }
      doughnutRef.current = new Chart(doughnutCtx, {
        type: "doughnut",
        data: {
          labels: ["소비 칼로리", "목표 칼로리"],
          datasets: [{
            label: "칼로리 소비량",
            data: [totalCalories, 500], // 목표 칼로리 (임시)
            backgroundColor: ["#36a2eb", "#ff6384"],
          }],
        },
        options: {
          plugins: {
            legend: {
              display: true,
              position: "bottom",
            },
          },
        },
      });
    }
  }, [exerciseData, totalCalories]); // exerciseData 또는 totalCalories가 변경될 때마다 실행

  return (
    <Container>
      <SignupFormContainer>
        <Title>오늘의 활동량</Title>
        <div style={{ display: "flex", alignItems: "center", width: "270px" }}>
          {exerciseData.length > 0 ? (
            <div style={{ width: '300%', height: 150 }}>
              <canvas id="exerciseChart" width={300} height={150}></canvas>
            </div>
          ) : (
            <p>데이터를 불러오는 중...</p>
          )}
        </div>
        {/* 목표 달성률 표시 코드 (그래프 아래에 표시) */}
        {exerciseData.length > 0 && (
          <>
            <p style={{ marginTop: 20 }}>목표 달성률: {calculateAchievementPercentage()}%</p>
            <div style={{ display: "flex", alignItems: "center", width: "240px", marginTop: 20 }}>
              <canvas id="caloriesChart" width={200} height={200}></canvas>
              <img src={exerciseImage} alt="exercise" style={{ width: 170, height: 150, marginLeft: 5 }} />
            </div>
          </>
        )}
      </SignupFormContainer>
    </Container>
  );
};

export default Exercise;
