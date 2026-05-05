import { Routes, Route } from "react-router-dom";
import MainPage from "./component/Page/mainPage.tsx";
import OnBoard from "./component/Page/onboard";
import ScorePage from "./component/Page/scorePage.tsx";
import CourseSelect from "./component/Page/course.tsx"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<OnBoard />} />
        <Route path="/Question_Answer" element={<MainPage />} />
        <Route path="/scores" element={<ScorePage />} />
        <Route path="/courses" element={<CourseSelect />} />
      </Routes>
    </>
  );
}

export default App;
