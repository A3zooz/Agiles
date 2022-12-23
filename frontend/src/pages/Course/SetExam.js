import React from "react";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import CreateCourseStyles from "./SetExam.module.css";
import { Link } from "react-router-dom";
const SetExam = () => {
  const [courseId, setCourseId] = useState("");
  const [subtitleId, setSubtitleId] = useState("");
  const [content, setContent] = useState("");
  const [firstChoice, setFirstChoice] = useState("");
  const [secondChoice, setSecondChoice] = useState("");
  const [thirdChoice, setThirdChoice] = useState("");
  const [fourthChoice, setFourthChoice] = useState("");
  const [questions, setQuestion] = useState([]);

  const handleSubmit = async (event) => {
    const exam = {
      courseId: courseId,
      subtitleId: subtitleId,
      questions: questions,
    };

    event.preventDefault();
    event.target.reset();
    let config = {
      headers: {
        header1: "Access-Control-Allow-Origin",
      },
    };

    try {
      const res = await axios.post("/instructor/setExam", exam, config);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your Quiz has been added successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (e) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Please Fill all Fields",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h1>Add an Exam</h1>
        <label>Course ID</label>
        <input
          required
          type="text"
          name="courseId"
          onChange={(e) => setCourseId(e.target.value)}
        />
        <br />
        <br />

        <label>Question</label>
        <input
          required
          type="text"
          name="questions"
          onChange={(e) => setQuestion(e.target.value)}
        />
        <br />
        <br />
        <label>First choice</label>
        <input
          required
          type="text"
          name="firstChoices"
          onChange={(e) => setFirstChoice(e.target.value)}
        />
        <br />
        <br />
        <label>Second choice</label>
        <input
          required
          type="text"
          name="secondChoices"
          onChange={(e) => setSecondChoice(e.target.value)}
        />
        <br />
        <br />
        <label>Third Choice</label>
        <input
          required
          type="text"
          name="thirdChoices"
          onChange={(e) => setThirdChoice(e.target.value)}
        />
        <br />
        <br />
        <label>Fourth choice</label>
        <input
          required
          type="text"
          name="fourthChoices"
          onChange={(e) => setFourthChoice(e.target.value)}
        />
        <br />
        <br />
        <label>Answer</label>
        {/* <select
          name="answers"
          id="answers"
          onChange={(e) => setAnswers(e.target.value)}
        >
          <option value="1">First Choice</option>
          <option value="2">Second Choice</option>
          <option value="3">Third choice</option>
          <option value="4">Fourth choice</option>
        </select> */}
        <br />
        <br />
        <input type="submit" value="Create Exam" />
      </form>
    </div>
  );
};
export default SetExam;
