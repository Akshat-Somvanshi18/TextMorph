import React, { useState } from "react";
import { LuArrowLeftRight } from "react-icons/lu";
import { FaRegCopy } from "react-icons/fa";

const Translator = (props) => {
  const [sourceLanguage, setSourceLanguage] = useState("");
  const [destinationLanguage, setDestinationLanguage] = useState("");
  const [sourceText, setSourceText] = useState("");
  const [destinationText, setDestinationText] = useState("");
  const [loading, setLoading] = useState();
  const [copyColor1, setCopyColor1] = useState("black");
  const [copyColor2, setCopyColor2] = useState("black");

  const changeHandler1 = (e) => {
    if (e.target.value === "Hindi") setSourceLanguage("hi");
    else if (e.target.value === "English") setSourceLanguage("en");
    else if (e.target.value === "French") setSourceLanguage("fr");
    else if (e.target.value === "Chinese") setSourceLanguage("zh");
    else if (e.target.value === "German") setSourceLanguage("de");
    else if (e.target.value === "Spanish") setSourceLanguage("es");
  };
  const changeHandler2 = (e) => {
    if (e.target.value === "Hindi") setDestinationLanguage("hi");
    else if (e.target.value === "English") setDestinationLanguage("en");
    else if (e.target.value === "French") setDestinationLanguage("fr");
    else if (e.target.value === "Chinese") setDestinationLanguage("zh");
    else if (e.target.value === "German") setDestinationLanguage("de");
    else if (e.target.value === "Spanish") setDestinationLanguage("es");
  };
  const changeHandler3 = (e) => {
    setSourceText(e.target.value);
    setDestinationText("");
    setCopyColor1("black");
    setCopyColor2("black");
  };
  const changeHandler4 = (e) => {
    setDestinationText(e.target.value);
    setCopyColor2("black");
  };

  const translate = async () => {
    if (
      sourceText === "" ||
      sourceLanguage === "Select" ||
      destinationLanguage === "Select"
    ) {
      props.alertfunc("Warning! Enter the complete fields", "warn");
      return;
    }

    const url = "https://text-translator2.p.rapidapi.com/translate";
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "a5b9a86491mshf24cddb8423a502p1b0dadjsn99698c715685",
        "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
      },
      body: new URLSearchParams({
        source_language: sourceLanguage,
        target_language: destinationLanguage,
        text: sourceText,
      }),
    };

    try {
      setLoading(true);
      const response = await fetch(url, options);
      const result = await response.json();
      setDestinationText(result.data.translatedText);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }

    if (sourceText === destinationText) {
      props.alertfunc("Cannot convert the input text", "warn");
    }
  };

  const copySourceText = () => {
    if (sourceText !== "") {
      navigator.clipboard.writeText(sourceText);
      setCopyColor1("green");
    }
  };
  const copyDestinationText = () => {
    if (destinationText !== "") {
      navigator.clipboard.writeText(destinationText);
      setCopyColor2("green");
    }
  };

  return (
    <>
      <section className="d-flex flex-column align-items-center mt-3">
        <div className="select-div">
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={changeHandler1}
          >
            <option value="Select">Select Input Language</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="French">French</option>
            <option value="Spanish">Spanish</option>
            <option value="German">German</option>
            <option value="Chinese">Chinese</option>
          </select>

          <LuArrowLeftRight size={30} className="mx-5 my-2" />

          <select
            className="form-select"
            aria-label="Default select example"
            onChange={changeHandler2}
          >
            <option value="Select">Select Output Language</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="French">French</option>
            <option value="Spanish">Spanish</option>
            <option value="German">German</option>
            <option value="Chinese">Chinese</option>
          </select>
        </div>

        <div className="translate-loader-div my-1">
          {loading === true && (
            <div className="main-loader">
              <div className="loader">
                <div></div>
                <div></div>
              </div>
            </div>
          )}
        </div>

        <div className="w-100 d-flex align-items-center justify-content-center text-holder-div">
          <textarea
            className="text-holder w-75 ps-3 pe-5 pt-3 rounded-5 shadow "
            value={sourceText}
            onChange={changeHandler3}
            placeholder="Enter the text to be translated."
            style={{
              backgroundColor: props.mode === "light" ? "white" : "black",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
          <FaRegCopy
            className="copy-btn"
            onClick={copySourceText}
            color={copyColor1}
            size={20}
          />
        </div>
        <div className="">
          <button
            onClick={translate}
            className="btn btn-primary rounded-pill my-3 px-5"
          >
            Translate
          </button>
        </div>
        <div className="w-100 d-flex align-items-center justify-content-center text-holder-div">
          <textarea
            className="text-holder w-75 ps-3 pe-5 pt-3 rounded-5 shadow"
            value={destinationText}
            onChange={changeHandler4}
            placeholder="Translated text would appear here."
            style={{
              backgroundColor: props.mode === "light" ? "white" : "black",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
          <FaRegCopy
            className="copy-btn"
            onClick={copyDestinationText}
            color={copyColor2}
            size={20}
          />
        </div>
      </section>
    </>
  );
};

export default Translator;
