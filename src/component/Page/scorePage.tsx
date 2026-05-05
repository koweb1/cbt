import { IoMdCheckmark } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";

export default function ScorePage() {
  const location = useLocation();
  const navigate = useNavigate();

  const score = location.state?.score ?? 0;
  const percentage = Math.round((score / 15) * 100);

  const remark = () => {
    if (score > 10) {
      return <div>Excellent performance! 🎉</div>;
    } else if (score > 5) {
      return <div>Good performance</div>;
    } else {
      return <div>Bad performance</div>;
    }
  };

  return (
    <div className="score_container">
      <div className="score-body">
        <div className="scoremark">
          <IoMdCheckmark size={40} />
        </div>

        <div className="scoretext">
          <div className="score">{score} /15</div>
          <div className="yourscore">Your score</div>

          <div className="score-review">{remark()}</div>

          <div className="score-description">
            You got {score} questions correct.
          </div>

          <div className="score-description">Score: {percentage}%</div>

          <button
            className="score-button"
            onClick={() => navigate("/Question_Answer")}
          >
            Retake Test
          </button>

          <button className="score-button2" onClick={() => navigate("/")}>
            Exit page
          </button>
        </div>
      </div>
    </div>
  );
}