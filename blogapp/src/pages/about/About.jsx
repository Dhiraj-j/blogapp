import React from "react";
import "./about.css";

export default function About() {
  return (
    <div>
      <div className="aboutPage">
        <div className="aboutLeft">
          <img
            src="https://images.pexels.com/photos/4419895/pexels-photo-4419895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="aboutRight">
          <h2>About </h2>
          <p>
            Hey, I'm Dhiraj Jaiswal currently pursuing my MCA, Learning MERN
            Development.It's my first Full-stack MERN project which is a blog
            website where you can register yourself so, you can write your own
            blogs on this website and the blog is visible for all visiter.also,
            you can attach images related to a blog title.
          </p>
        </div>
      </div>
    </div>
  );
}
