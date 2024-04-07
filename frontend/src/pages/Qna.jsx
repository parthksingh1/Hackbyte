import { useEffect } from "react";
import { checkAuth, getUserProfile } from "../api/auth/util";
import Postquestion from "../components/postquestion";
import {useAuthStore} from "../store/authStore";
import axios from "axios";
import { useState } from "react";

const Qna = () => {
  const { setIsAuthenticated, setUserProfile} = useAuthStore();

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await axios.get("http://localhost:3001/api/v1/questions");

        const fetchedQuestions = response.data.data;
        console.log("Fetched questions: ", fetchedQuestions);

        setQuestions(fetchedQuestions);
      } catch (error) {
        console.error("Error fetching questions: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="w-full h-full flex flex-col gap-4 justify-center items-center mt-4">
        {questions.map((question) => (
          <Postquestion
            key={question._id}
            title={question.title} 
            content={question.text}
            createdAt={question.createdAt}
          />
        ))}
      </div>
    </>
  );
};

export default Qna;
