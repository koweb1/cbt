import Heading from "../heading.tsx";
import Body from "../body.tsx";
import { COURSES_DATA, alphabet } from "../Assets/data.tsx"; // CHANGED
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // ADD useLocation

export default function MainPage() {
  const location = useLocation(); // ADD THIS
  const courseCode = (location.state?.courseCode ??
    "GST 111") as keyof typeof COURSES_DATA;
  const data = COURSES_DATA[courseCode] ?? []; // ADD THIS

  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>([]);
  const [score, setScore] = useState(0);

  const lastQuestion = index === data.length - 1;
  const navigate = useNavigate();

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
      // PASS total along with score
      navigate("/scores", { state: { score, total: data.length } });
      return;
    }
    setIndex((prev) => prev + 1);
  }

  function handlePrevious() {
    setIndex((prev) => prev - 1);
  }

  function handleTimeUp() {
    navigate("/scores", { state: { score, total: data.length } }); // PASS total here too
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
          progress={progress}
        />
      </div>
    </div>
  );
}
