import axios from "./Axios";

export const signup = async (data) => {
  try {
    const response = await axios.post("/api/signup", data);

    if (response.status === 200) {
      return response.data;
    } else {
      console.error("서버에서 에러 응답:", response.data);
      throw new Error(response.data);
    }
  } catch (error) {
    console.error("통신 에러 발생:", error);
    throw new Error(error);
  }
};
