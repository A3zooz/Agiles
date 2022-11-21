import "./Home.css";
import { Link } from "react-router-dom";
import NavbarStyles from "../components/Navbar.module.css";
import React from "react";
import Cookies from "universal-cookie";
import a from "../static/logo.png";
import { useState,useEffect } from "react";
import Inprogress from "../components/Inprogress";
const cookies = new Cookies();
const Home = (props) => {
  const logged = props.logged;
  const status = cookies.get("status");
  const [choice , setChoice] = useState(0);

  if (logged) {
    if (status == 0) {
      return (
        <div className="home">
          <section className="main">
            <div>
              <h2>Welcome Back !</h2>
            </div>
            <img src={a} alt="mainImage" className="mainImage"></img>
          </section>
          <nav className={NavbarStyles["navbar"]}>
            <div className={NavbarStyles["links"]}>
            <button onClick = {()=>setChoice(0)} className={choice==0?"Inprogress" :"notPressed"} >Explore</button>
              <button onClick = {()=>setChoice(1)} className={choice==1?"Inprogress" :"notPressed"} >Inprogress</button>
              <button onClick = {()=>setChoice(2)} className={choice==2?"Inprogress" :"notPressed"} >Completed</button>
            </div>
          </nav>
          {choice==1?<section ><Inprogress></Inprogress></section>:<section></section>
             }
          <footer></footer>
        </div>
      );
    } else {
      return (
        <div className="home">
          <section className="main">
            <div>
              <h2>Welcome Back !</h2>
            </div>
            <img src={a} alt="mainImage" className="mainImage"></img>
          </section>
          <nav className={NavbarStyles["navbar"]}>
            <div className={NavbarStyles["links"]}>
              <Link to="/instructorOwnCourses">My courses</Link>
              <Link to="/instructorCreateCourse">Create Course</Link>
              <Link to="/instructor/instructorViewProfile">View/Edit Profile</Link>
            </div>
          </nav>
          <footer></footer>
        </div>
      );
    }
  } else {
    return (
      <div className="home">
        <section className="main">
          <div>
            <h2>Register now !</h2>
          </div>
          <img src={a} alt="mainImage" className="mainImage"></img>
        </section>
        <nav className={NavbarStyles["navbar"]}>
          <div className={NavbarStyles["links"]}>
            <Link to="/courses">Explore</Link>
          </div>
        </nav>
        <footer></footer>
      </div>
    );
  }
};

export default Home;
