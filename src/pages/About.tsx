import React from "react";
import { useHistory } from "react-router-dom";

const About: React.FC = () => {
  const history = useHistory();

  return (
    <>
      <h1>About us...</h1>
      <button className="btn" onClick={() => history.push("/")}>Main page</button>
    </>
  )  
}

export default About;