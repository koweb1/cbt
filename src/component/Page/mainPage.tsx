import Heading from "../heading.tsx";
import Body from "../body.tsx";
import { data, alphabet } from "../Assets/data.tsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>([]);
  const [score, setScore] = useState(0);

  const lastQuestion = index === data.length - 1;
  const navigate = useNavigate();

  // NEW: calculate progress
  const answered = answers.filter((a) => a !== null).length;
  const progress = (answered / data.length) * 100;

  function handleSelected(option: string) {
    if (answers[index] != null) return;

    const updated = [...answers];
    updated[index] = option;
    setAnswers(updated);

    if (option === data[index].ans) {
      setScore((prev) => prev + 1);
    }
  }

  function handleNext() {
    if (lastQuestion) {
      navigate("/scores", { state: { score } });
      return;
    }

    setIndex((prev) => prev + 1);
  }

  function handlePrevious() {
    setIndex((prev) => prev - 1);
  }

  function handleTimeUp() {
    navigate("/scores", { state: { score } });
  }

  return (
    <div className="contact">

      <div className="content">
        <Heading
          numbers={index + 1}
          total={data.length}
          previous={handlePrevious}
          onTimeUp={handleTimeUp}
        />

        <Body
          questions={data[index]}
          letter={alphabet}
          onNext={handleNext}
          onSelect={handleSelected}
          selected={answers[index] || null}
          progress={progress} // NEW
        />
      </div>
    </div>
  );
}
