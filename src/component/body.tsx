type props = {
  questions: {
    question: string;
    options: string[];
    ans: string;
  };
  letter: string[];
  onNext: () => void;
  onSelect: (option: string) => void;
  selected: string | null;
  progress: number;
};

export default function Body({
  questions,
  letter,
  onNext,
  onSelect,
  selected,
  progress,
}: props) {
  return (
    <div className="body-container">
      <div className="movingpart">
        <div
          className="movingbar"
          style={{
            width: `${progress}%`,
          }}
        ></div>
      </div>

      <div className="mainBody">
        <div className="question">
          <h2>{questions.question}</h2>

          <ul>
            {questions.options.map((opt, index) => (
              <li
                key={index}
                onClick={() => onSelect(opt)}
                style={{
                  cursor: "pointer",
                  backgroundColor:
                    selected === opt
                      ? opt === questions.ans
                        ? "hsl(120, 100%, 85%)"
                        : "hsl(0, 100%, 85%)"
                      : opt === questions.ans && selected !== null
                        ? "hsl(120, 100%, 85%)"
                        : "",
                }}
              >
                <div className="letters-contain">
                  <span className="letters">{letter[index]}</span>
                </div>

                {opt}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button className="button" onClick={onNext}>
        Next
      </button>
    </div>
  );
}
