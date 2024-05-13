// ExerciseStyle.js (스타일 파일)

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: linear-gradient(to right, #6a11cb, #2575fc);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  color: #fff;
  margin-bottom: 20px;
`;

export const DataContainer = styled.div`
  background: #fff;
  padding: 15px;
  border-radius: 8px;
 
  `;
  export const DataEntry = styled.div`
  /* 데이터 항목 스타일 */
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const IconContainer = styled.div`
  /* 아이콘 컨테이너 스타일 */
  margin-right: 10px;
  font-size: 24px; /* 아이콘 크기 조정 */
`;

