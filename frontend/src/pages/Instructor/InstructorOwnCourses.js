import React, { useState } from "react";
import { CourseCard } from "../../components/CourseCard";
import axios from "axios";

function InstructorOwnCourses() {
  const [courses, SetCourses] = useState([]);
  const [name, setName] = useState("");
  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (name == "") {
      alert("please enter your name");
    }
    let data = await axios.get(
      `/instructor/listCourseTitles/?username=${name}`
    );
    SetCourses(data.data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleChange} />
        </label>
        <input type="submit" value="View My Course" />
      </form>
      <div>
        {courses.map((el) => {
          return <CourseCard data={el} />;
        })}
      </div>
    </div>
  );
}

export default InstructorOwnCourses;
