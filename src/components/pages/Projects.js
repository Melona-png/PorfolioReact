import React from "react";
import notetaker from "../images/notetaker.png";

export default function Projects() {
  // array goes here
  const projectList = [
    {
      id: 1,
      name: "JasonBorne",
      description:
        "Note Taker is a web application that allows you to write and save notes. It's built with Express.js on the back-end and provides an intuitive interface for organizing your thoughts and keeping track of tasks you need to complete.",
      repo: "https://github.com/Melona-png/JSONBorne-NoteTaker",
      deployed: "https://jsonborne.herokuapp.com/",
      image: notetaker,
    },
    {
      id: 2,
      name: "WeatherAPI",
      description: "lorem",
      repo: "ipsum",
      deployed: "weee",
      image: "hello",
    },
  ];
  return (
    <div>
      <h1>Projects</h1>
      {projectList.map((item) => (
        <div className="card" style={{ width: "18rem" }} key={item.id}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            {/* fill in classNames with object info name,description,repo,deployed,image- like below */}
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
          <div className="card-body">
            <a href={item.repo} className="card-link">
              Card link
            </a>
            <a href={item.deployed} className="card-link">
              Another link
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
