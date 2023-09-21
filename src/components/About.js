import React, { useState } from "react";

export default function About(props) {
  let [flag1, setFlag1] = useState(false);
  let [flag2, setFlag2] = useState(false);
  let [flag3, setFlag3] = useState(false);

  let showDetail = (number) => {
    if (number === 1) {
      if (flag1 === false) setFlag1(true);
      else setFlag1(false);
    } else if (number === 2) {
      if (flag2 === false) setFlag2(true);
      else setFlag2(false);
    } else {
      if (flag3 === false) setFlag3(true);
      else setFlag3(false);
    }
  };
  return (
    <>
      <h1
        id="about_h1"
        style={{
          color: props.mode === "light" ? "darkgreen" : "white",
          textShadow:
            props.mode === "light" ? "2px 3px lightgray" : "2px 3px lightgray",
        }}
      >
        About Us
      </h1>
      <section id="about_section">
        <div
          className="about_div"
          onClick={() => showDetail(1)}
          style={{
            color: props.mode === "light" ? "black" : "white",
            backgroundColor:
              props.mode === "light" ? "rgb(227, 139, 155)" : "black",
          }}
        >
          What is Text Analyzer ?
        </div>
        <div
          className="about_detail"
          style={{
            display: flag1 === true ? "block" : "none",
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          Text Analyzer is a react based utility web app that allows the user to
          manipulate and render his sample text input as per the provided
          features. It is a fully-responsive web app with features like alert
          mode and dark mode for the convenience of the user.
        </div>
        <div
          className="about_div"
          onClick={() => showDetail(2)}
          style={{
            color: props.mode === "light" ? "black" : "white",
            backgroundColor:
              props.mode === "light" ? "rgb(227, 139, 155)" : "black",
          }}
        >
          What features does it offer ?
        </div>
        <div
          className="about_detail"
          style={{
            display: flag2 === true ? "block" : "none",
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          1: Text Transformation: Easily convert text to uppercase, lowercase, or
          capitalize with just a click. Make your text fit your needs
          effortlessly. <br></br><br></br>
          2: Character and Word Count: Instantly find out the number
          of characters and words in your text. No more manual counting.<br></br><br></br>
          3: Dictionary: Explore the world of words with our built-in dictionary
          feature. Look up definitions and get clear, concise explanations for
          any word. Want to know how it's pronounced? TextMorph Pro provides
          voice pronunciation too.<br></br><br></br>
          4: Translator: Break language barriers with our
          powerful translation tool. Translate text from any global language to
          another seamlessly. Communicate effectively with people worldwide.<br></br><br></br>
          5: User-Friendly Interface: TextMorph Pro is designed with ReactJS and
          Bootstrap, ensuring a sleek and intuitive user experience. Say goodbye
          to clunky interfaces. <br/><br></br>
        </div>
        <div
          className="about_div"
          onClick={() => showDetail(3)}
          style={{
            color: props.mode === "light" ? "black" : "white",
            backgroundColor:
              props.mode === "light" ? "rgb(227, 139, 155)" : "black",
          }}
        >
          How does it work ?
        </div>
        <div
          className="about_detail"
          style={{
            display: flag3 === true ? "block" : "none",
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          Text Analyzer has been designed with an input section in which user
          can input his text to be rendered. It offers basic text-rendering
          features which can be accessed by provided buttons just below the
          input section. It possesses a preview section which displays the
          preview of input text after applying user-desired rendering. It comes
          with user-friendly alert feature which enables the users to know if
          their requested operation has been completed successfully. Text
          Analyzer also offers dark mode feature for good quality
          user-experience.
        </div>
      </section>
    </>
  );
}
