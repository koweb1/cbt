import "./components.css";
import image from "./Assets/stopwatch.webp";
import { BiArrowBack } from "react-icons/bi";
import { useState, useEffect } from "react";
type props = {
  numbers: number;
  total: number;
  previous: () => void;
  onTimeUp: () => void;
};
export default function Heading({ numbers, total, previous, onTimeUp }: props) {
  const [time, setTimer] = useState(300);

  useEffect(() => {
    if (time === 0) {
      onTimeUp();
      return;
    }

    if (time > 0) {
      const timer = setTimeout(() => {
        setTimer(time - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [time, onTimeUp]);

  const formatedTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${minutes < 10 ? "0" : ""}${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };
  return (
    <div className="heading-container">
      <div className="heading-items">
        <div className="exitIcon">
          <BiArrowBack
            onClick={previous}
            size={30}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="number">
          {numbers < 10 ? 0 : ""}
          {numbers} of {total}
        </div>
        <div className="timer">
          <div className="image-container">
            <img src={image} className="image" />
          </div>

          <span className="timer-text">{formatedTime(time)}</span>
        </div>
      </div>
    </div>
  );
}
