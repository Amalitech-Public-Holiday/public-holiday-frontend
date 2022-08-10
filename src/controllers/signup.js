const BASE_URL = "https://react-public-holidays-backend.herokuapp.com";

export const getUserByEmail = async (email) => {
  const response = await fetch(`${BASE_URL}/users?email=${email}`);
  const jsonResponse = await response.json();
  return jsonResponse;
};
