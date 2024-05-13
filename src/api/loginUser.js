// ../api/loginUser 모듈에서
export const login = async (data, serverURL) => {
  try {
    const response = await fetch(`${serverURL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('로그인에 실패했습니다.');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};
