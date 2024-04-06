import { useEffect } from "react";
import { checkAuth, getUserProfile } from "../api/auth/util";
import Postquestion from "../components/postquestion";
import { useAuthStore } from "../store/authStore";

const Home = () => {
  const { setIsAuthenticated, setUserProfile } = useAuthStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authStatus = await checkAuth();
        setIsAuthenticated(authStatus);
        const user = await getUserProfile();
        setUserProfile(user);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="w-full h-full flex flex-col gap-4 justify-center items-center mt-4">
        <Postquestion />
        <Postquestion />
        <Postquestion />
        <Postquestion />
      </div>
    </>
  );
};

export default Home;
