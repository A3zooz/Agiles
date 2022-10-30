import { CourseCard } from "../../components/CourseCard";
import { useState, useEffect } from "react";
import CourseStyles from "./Courses.module.css";
import Filter from "../../components/Filter";
import LoadingScreen from "react-loading-screen";
import spinner from "../../static/download.gif"
const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const res = await fetch("/course/listCourses/details");
      let jsondata = await res.json();
      if (res.ok) {
        setCourses(jsondata);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="course">
      {isloading ? (
        <LoadingScreen loading={true} logoSrc={spinner} />
      ) : (
        <>
          <div className={CourseStyles["course-list"]}>
            {courses.map((el,index) => {
              return <CourseCard data={el} key={index}/>;
            })}
          </div>
          <Filter />;
        </>
      )}
    </div>
  );
};

export default Courses;
