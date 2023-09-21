import React from "react";

export default function Contact(props) {
  return (
    <>
      <h4
        className="contact_h4"
        style={{
          color: props.mode === "light" ? "darkgreen" : "#ada9a9",
          textShadow:
            props.mode === "light" ? "2px 3px lightgray" : "1px 6px black",
        }}
      >
        ...Designing With Passion While Exploring The World...
      </h4>
      <h3
        id="contact_h3"
        style={{
          color: props.mode === "light" ? "black" : "white",
          textShadow:
            props.mode === "light" ? "2px 3px lightgray" : "1px 6px black",
        }}
      >
        Akshat S Somvanshi
      </h3>
      <h5
        id="contact_h5"
        style={{
          color: props.mode === "light" ? "black" : "white",
          textShadow:
            props.mode === "light" ? "2px 3px lightgray" : "1px 6px black",
        }}
      >
        akshatsingh0920021816@gmail.com | (+91) 9555219227
      </h5>
      <h1
        id="contact_sign"
        style={{
          color: props.mode === "light" ? "#344b9d" : "lightgray",
          textShadow:
            props.mode === "light" ? "2px 3px lightgray" : "0px 0px black",
        }}
      >
        AkshatSSomvanshi_..
      </h1>
      <section id="contact_section">
        <a
          href="https://github.com/Akshat-Somvanshi18"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="./logo/github.png"
            id="contact1"
            className="contact_logo"
            alt="github_logo"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/akshat-s-somvanshi-8651a2219/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="./logo/linkedin.png"
            id="contact2"
            className="contact_logo"
            alt="linkedin_logo"
          />
        </a>
        <a
          href="https://www.instagram.com/_._akshat_/?hl=en"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="./logo/insta.png"
            id="contact3"
            className="contact_logo"
            alt="insta_logo"
          />
        </a>
        <a
          href="https://www.facebook.com/AkshatSSomvanshi"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="./logo/facebook.png"
            id="contact4"
            className="contact_logo"
            alt="facebook_logo"
          />
        </a>
      </section>
      <h4
        className="contact_h4"
        style={{
          color: props.mode === "light" ? "darkgreen" : "#ada9a9",
          textShadow:
            props.mode === "light" ? "2px 3px lightgray" : "1px 6px black",
        }}
      >
        If Not Now, When ?
      </h4>
      <h4
        className="contact_h4"
        style={{
          color: props.mode === "light" ? "darkgreen" : "#ada9a9",
          textShadow:
            props.mode === "light" ? "2px 3px lightgray" : "1px 6px black",
        }}
      >
        Let's Work Together !
      </h4>
    </>
  );
}
