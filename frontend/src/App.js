import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Courses from "./pages/Course/Courses";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Admin from "./pages/Admin/Admin";
import AddAdmin from "./pages/Admin/AddAdmin";
import AddInstructor from "./pages/Admin/AddInstructor";
import AddCorporate from "./pages/Admin/AddCorporate";
import IndividualTrainee from "./pages/IndvidualTrainee/IndividualTrainee";
import CorporateTrainee from "./pages/CorporateTrainee/CorporateTrainee";
import InstructorOwnCourses from "./pages/Instructor/InstructorOwnCourses";
import CreateCourse from "./pages/Course/CreateCourse";
import Instructor from "./pages/Instructor/Instructor";
import SearchResults from "./pages/Course/SearchResults";
import Course from "./pages/Course/Course";
import FilterResults from "./pages/Course/FilterResults";
import InstructorTerms from "./pages/Instructor/InstructorTerms";
import { useState } from "react";
import InstructorProfile from "./pages/Instructor/InstructorProfile";
function App() {
  const [showNav, setShowNav] = useState(true);
  return (
    <div className="App">
      <BrowserRouter>
        {showNav && (
          <nav>
            <Navbar />
          </nav>
        )}
        <div className="pages">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/admin" element={<Admin />} />
            <Route
              path="/addInstructor"
              element={<AddInstructor funcNav={setShowNav} />}
            />
            <Route
              path="/addAdmin"
              element={<AddAdmin funcNav={setShowNav} />}
            />
            <Route
              path="/addCorporate"
              element={<AddCorporate funcNav={setShowNav} />}
            />
            <Route path="/instructor" element={<Instructor />} />
            <Route path="/itrainee" element={<IndividualTrainee />} />
            <Route path="/ctrainee" element={<CorporateTrainee />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/ccourses" element={<Courses corporate={true} />} />
            <Route path="/course" element={<Course />} />
            <Route path="/createCourse" element={<CreateCourse />} />
            <Route
              path="/instructorOwnCourses"
              element={<InstructorOwnCourses />}
            />
            <Route path="/search" element={<SearchResults />} />
            <Route
              path="/csearch"
              element={<SearchResults corporate={true} />}
            />
            <Route path="/instructorCreateCourse" element={<CreateCourse />} />
            <Route path="/courses/filter" element={<FilterResults />} />
            <Route
              path="/ccourses/filter"
              element={<FilterResults corporate={true} />}
            />
            <Route path="/instructor/contract" element={<InstructorTerms />} />
            <Route
              path="/instructor/instructorViewProfile"
              element={<InstructorProfile></InstructorProfile>}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
