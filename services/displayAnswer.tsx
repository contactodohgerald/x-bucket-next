import Textarea from "@/components/Layouts/Textarea";
import { useState, useEffect } from "react";

const AnswerDisplay = (newAnswer: string) => {
  const [displayedAnswer, setDisplayedAnswer] = useState("");
  const answer = newAnswer.trim();
  const words = answer.split(" ").filter((word) => word !== "");
  //const words = answer.split(' ');
  const delay = 200;

  useEffect(() => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      if (currentIndex < words.length) {
        setDisplayedAnswer(
          (prevAnswer) =>
            prevAnswer +
            words[currentIndex] +
            (currentIndex === words.length - 1 ? "" : " ")
        );
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, delay);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Textarea rows={10} value={displayedAnswer} readOnly={true}></Textarea>
  );
};

export default AnswerDisplay;
