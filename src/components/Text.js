import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Text(props) {
  let [preview, setPreview] = useState("");
  let [text, setText] = useState("");
  let [replacedText, setreplacedText] = useState("");
  let [replacingText, setreplacingText] = useState("");
  let [copy1, setCopy1] = useState("Copy");
  let [copy2, setCopy2] = useState("Copy");
  let changeToUpperCase = () => {
    let s = "";
    if (preview !== "") s = preview;
    else s = text;
    const newtext = s.toUpperCase();
    setPreview(newtext);
    if (s !== "")
      props.alertfunc(
        "Success! Text has been converted to upper case",
        "success"
      );
    else {
      props.alertfunc(
        "Warning! Enter the text to be converted to Upper Case.",
        "warn"
      );
    }
    setCopy2("Copy");
  };
  let changeToLowerCase = () => {
    let s = "";
    if (preview !== "") s = preview;
    else s = text;
    const newtext = s.toLowerCase();
    setPreview(newtext);
    if (s !== "")
      props.alertfunc(
        "Success! Text has been converted to lower case",
        "success"
      );
    else {
      props.alertfunc(
        "Warning! Enter the text to be converted to Lower Case.",
        "warn"
      );
    }
    setCopy2("Copy");
  };

  let replaceText = () => {
    let s = "";
    let msg = "";
    let temp="";
    if (preview !== "") s = preview;
    else s = text;
    let s1 = replacedText;
    let s2 = replacingText;
    if (s1 === "") {
      props.alertfunc(
        "Warning! Enter the text that is to be replaced.",
        "warn"
      );
    } else if (s !== "" && s1 !== "") {
      temp = s.replaceAll(s1, s2);
      if (temp !== s) {
        setPreview(temp);
        setreplacedText("");
        setreplacingText("");
        props.alertfunc("Success! Text has been replaced", "success");
        setCopy2("Copy");
      } else {
        msg = "Warning! ".concat(s1).concat(" is not found in the text");
        props.alertfunc(msg, "warn");
      }
    } else {
      props.alertfunc(
        "Warning! Enter the text in which replacement is to be done.",
        "warn"
      );
    }
  };
  let changeToReset = () => {
    setText("");
    setPreview("");
    props.alertfunc("Success! Text has been reset", "success");
    setCopy1("Copy");
    setCopy2("Copy");
  };
  let onChangeHandler1 = (event) => {
    setText(event.target.value);
    setPreview("");
    setCopy1("Copy");
    setCopy2("Copy");
  };
  let onChangeHandler2 = (event) => {
    setreplacedText(event.target.value);
  };
  let onChangeHandler3 = (event) => {
    setreplacingText(event.target.value);
  };

  let characterCount = () => {
    return text.length;
  };
  let wordCount = () => {
    if (text === "") {
      return 0;
    } else {
      text = text.trim();
      let arr = text.split(/\s+/);
      return arr.length;
    }
  };
  let RemoveExtraSpaces = () => {
    let s = "";
    if (preview !== "") s = preview;
    else s = text;
    let str = "";
    if (s !== "") {
      let arr = s.split(" ");
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== "") {
          str = str.concat(arr[i]).concat(" ");
        }
      }
      str = str.trim();
      setPreview(str);
      setCopy2("Copy");
      props.alertfunc(
        "Success! Spaces have been rendered sucessfully.",
        "success"
      );
    } else {
      props.alertfunc(
        "Warning! Enter the text that is to be rendered.",
        "warn"
      );
    }
  };
  let copyText = () => {
    if (text !== "") {
      let c1 = document.getElementById("mytext1");
      navigator.clipboard.writeText(c1.value);
      props.alertfunc("Success! Text has been copied", "success");
      setCopy1("Copied");
    } else {
      props.alertfunc("Warning! Enter the text that is to be copied.", "warn");
    }
  };
  let copyPreview = () => {
    if (preview !== "") {
      let c2 = document.getElementById("mytext2");
      navigator.clipboard.writeText(c2.value);
      props.alertfunc("Success! Text has been copied", "success");
      setCopy2("Copied");
    } else {
      props.alertfunc("Warning! No preview to copy.", "warn");
    }
  };

  return (
    <>
      <div
        id="mycontent_holder"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h4 className="my-2">Enter the text to analyse</h4>

        <div
          id="mytext_holder1"
          style={{
            backgroundColor: props.mode === "light" ? "white" : "black",
            border:
              props.mode === "light" ? "1px solid black" : "1px solid white",
          }}
        >
          <textarea
            id="mytext1"
            value={text}
            onChange={onChangeHandler1}
            placeholder="Enter your text here."
            style={{
              backgroundColor: props.mode === "light" ? "white" : "black",
              color: props.mode === "light" ? "black" : "white",
            }}
            spellCheck={true}
          >
            {" "}
          </textarea>
          <button
            className="btn-copy"
            onClick={copyText}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "black",
              color: props.mode === "light" ? "blue" : "white",
            }}
          >
            {copy1}
          </button>
        </div>
        <div id="mybutton_holder">
          <button
            id="btn_upper"
            onClick={changeToUpperCase}
            style={{
              backgroundColor: props.mode === "light" ? "#e38b9b" : "grey",
              color: props.mode === "light" ? "black" : "white",
            }}
          >
            Upper Case
          </button>
          <button
            id="btn_lower"
            onClick={changeToLowerCase}
            style={{
              backgroundColor: props.mode === "light" ? "#e38b9b" : "grey",
              color: props.mode === "light" ? "black" : "white",
            }}
          >
            Lower Case
          </button>
          <button
            id="btn_copy"
            onClick={RemoveExtraSpaces}
            style={{
              backgroundColor: props.mode === "light" ? "#e38b9b" : "grey",
              color: props.mode === "light" ? "black" : "white",
            }}
          >
            Render Spaces
          </button>
          <button
            id="btn_reset"
            onClick={changeToReset}
            style={{
              backgroundColor: props.mode === "light" ? "#e38b9b" : "grey",
              color: props.mode === "light" ? "black" : "white",
            }}
          >
            Reset Text
          </button>
        </div>
        <div id="myreplace_holder">
          <input
            type="text"
            placeholder="Replace Text"
            value={replacedText}
            onChange={onChangeHandler2}
            className="mx-2"
            id="my-replace-text1"
          ></input>
          <input
            type="text"
            placeholder="With Text"
            value={replacingText}
            onChange={onChangeHandler3}
            className="mx-2"
            id="my-replace-text2"
          ></input>
          <button
            onClick={replaceText}
            id="btn_replace"
            style={{
              backgroundColor: props.mode === "light" ? "#e38b9b" : "grey",
              color: props.mode === "light" ? "black" : "white",
            }}
          >
            Replace Text
          </button>
        </div>
        <p id="mycount_holder">
          <b>{wordCount()}</b> Words , <b>{characterCount()}</b> Characters
        </p>
        <h4 className="my-1">Preview of the text</h4>

        <div
          id="mytext_holder2"
          style={{
            backgroundColor: props.mode === "light" ? "white" : "black",
            border:
              props.mode === "light" ? "1px solid black" : "1px solid white",
          }}
        >
          <textarea
            id="mytext2"
            value={preview}
            readOnly={true}
            placeholder="Your preview of the text will appear here."
            style={{
              backgroundColor: props.mode === "light" ? "white" : "black",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
          <button
            className="btn-copy"
            onClick={copyPreview}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "black",
              color: props.mode === "light" ? "blue" : "white",
            }}
          >
            {copy2}
          </button>
        </div>
      </div>
    </>
  );
}
Text.propTypes = {
  title: PropTypes.string,
};
Text.defaultProps = {
  title: "light",
};
