import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Course {
  code: string;
  title: string;
  questions: number;
  icon: string;
  progress: number;
}

const COURSES: Course[] = [
  {
    code: "GST 111",
    title: "Use of English",
    questions: 10,
    icon: "📝",
    progress: 0,
  },
  {
    code: "ENT 211",
    title: "Entrepreneurship",
    questions: 10,
    icon: "💡",
    progress: 0,
  },
];

const CourseSelect = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const filtered = COURSES.filter(
    (c) =>
      c.code.toLowerCase().includes(query.toLowerCase()) ||
      c.title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="course-page">
      <span className="badge">2026/2027 Academic Session</span>

      <h1 className="title">Select Your Course</h1>
      <p className="subtitle">Start practicing past questions in seconds</p>

      <div className="search-wrap">
        <svg
          className="search-icon"
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          className="search"
          placeholder="Search GST 111, ENT 211..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="stats-row">
        <div className="stat">
          <strong>{COURSES.length}</strong>
          Courses
        </div>
        <div className="stat divider">|</div>
        <div className="stat">
          <strong>{COURSES.reduce((sum, c) => sum + c.questions, 0)}</strong>
          Questions
        </div>
        <div className="stat divider">|</div>
        <div className="stat">
          <strong>Free</strong>
          Access
        </div>
      </div>

      <div className="grid">
        {filtered.length > 0 ? (
          filtered.map((c) => (
            <div key={c.code} className="card">
              <div className="card-top">
                <div className="card-icon">{c.icon}</div>
                <span className="card-pill">{c.questions} Qs</span>
              </div>

              <div className="card-code">{c.code}</div>
              <div className="card-title">{c.title}</div>

              <div className="card-meta">
                <span className="dot" />
                {c.progress > 0 ? `${c.progress}% completed` : "Not started"}
              </div>

              <div className="card-footer">
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${c.progress}%` }}
                  />
                </div>
                <button
                  className="start-btn"
                  onClick={() =>
                    navigate("/Question_Answer", {
                      state: { courseCode: c.code },
                    })
                  }
                >
                  Start <span className="arrow">→</span>
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">No courses match "{query}"</p>
        )}
      </div>
    </div>
  );
};

export default CourseSelect;
