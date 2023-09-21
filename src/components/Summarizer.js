import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa";

const Summarizer = (props) => {
  const [sourceText, setSourceText] = useState("");
  const [destinationText, setDestinationText] = useState("");
  const [loading, setLoading] = useState();
  const [copyColor1, setCopyColor1] = useState("black");
  const [copyColor2, setCopyColor2] = useState("black");

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

  const summarize = async () => {
    const url =
      "https://article-extractor-and-summarizer.p.rapidapi.com/summarize-text";
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "a5b9a86491mshf24cddb8423a502p1b0dadjsn99698c715685",
        "X-RapidAPI-Host": "article-extractor-and-summarizer.p.rapidapi.com",
      },
      body: {
        lang: "en",
        text: sourceText,
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      // console.log(result[2]);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
    <h1 className="text-center">Still Working On It...</h1>
      {/* <section className="d-flex flex-column align-items-center mt-3">
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
            placeholder="Enter the text to be summarized."
          ></textarea>
          <FaRegCopy
            className="copy-btn"
            onClick={copySourceText}
            color={copyColor1}
            size={20}
          />
        </div>
        <div className="">
          <button className="btn btn-primary rounded-pill my-3 px-5" onClick={summarize}>
            Summarize
          </button>
        </div>
        <div className="w-100 d-flex align-items-center justify-content-center text-holder-div">
          <textarea
            className="text-holder w-75 ps-3 pe-5 pt-3 rounded-5 shadow"
            value={destinationText}
            onChange={changeHandler4}
            placeholder="Summarized text would appear here."
          ></textarea>
          <FaRegCopy
            className="copy-btn"
            onClick={copyDestinationText}
            color={copyColor2}
            size={20}
          />
        </div>
      </section> */}
    </>
  );
};

export default Summarizer;
