import axios from "axios";

export const checkAuth = async () => {
  try {
    const response = await axios.get("http://localhost:3000/isauth", {withCredentials: true});
    return response.data;
  } catch (error) {
    console.log("Error checking authentication status: ", error);
    throw error;
  }
};

export const getUserProfile = async () => {
  try {
    const response = await axios.get("http://localhost:3000/profile", {withCredentials: true});
    return response.data;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
};
