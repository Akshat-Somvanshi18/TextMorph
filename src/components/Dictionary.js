import React, { useState , useEffect} from "react";
import { AiOutlineSearch } from "react-icons/ai";
const Dictionary = (props) => {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState("");
  const [audio, setAudio] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const changeHandler = (e) => {
    setWord(e.target.value);
  };



  const find1 = () => {

    setAudio("");
    setError(false);
    setMeaning("");
    const a = word.split(' ');
    if(a.length >= 2)
    {
      setError(true);
      return ;
    }
    else if(a.length == 0)
    {
      props.alertfunc("Warning! Enter the word to be searched","warn");
      return ;
    }
    else if(word === "")
    {
      props.alertfunc("Warning! Enter the word to be searched","warn");
      return ;
    }
    find2();
  };

  const find2 = async()=>{

    setLoading(true);

    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    try {

      const response = await fetch(url);
      if(response.status != 404)
      {
        console.log("enteredfegd");
          let result = await response.json();
          result = result[0];
          setMeaning(result);
      }
      else
      {
        setError(true);
      }

    } catch (error) {
      setError(true);
    }

    setLoading(false);
  }

  if (loading === true) {
    return <div className="main-loader"><div className="loader"><div></div><div></div></div></div>;
  }


  return (
    <>
    <section className="d-flex flex-column align-items-center">
      <div className="form-floating">
        <input
          type="text"
          className="form-control rounded-5 word-input"
          id="floatingInput"
          placeholder="Enter the word to be searched"
          value={word}
          onChange={changeHandler}
          autoComplete="off"
        />
        <label htmlFor="floatingInput" className="ps-3 form-floating-label w-75"><AiOutlineSearch size={20} className="me-2"/>Enter the word to be searched</label>
        <button className="btn btn-primary rounded-end-pill search p-3 " onClick={find1}>Search</button>
      </div>

      <div style={{ color: props.mode === "light" ? "black" : "white" }}>
        { error && 
        <div className="d-flex flexx-column align-items-center justify-content-center">
          <img src="./logo/error-img.png" className="error-img"/>
        </div>
        }
      </div>

      <div className="d-flex audio-div ms-4">
        {
          meaning && meaning.phonetics && meaning.phonetics[0].audio 
          &&
          <audio controls className="mt-5">
             <source src={meaning.phonetics[0].audio} />
          </audio>
        }
      </div>

      <div className="d-flex audio-div ms-4">
        {
          meaning && meaning.phonetics && meaning.phonetics[0].audio == "" && meaning.phonetics[1].audio
          &&
          <audio controls className="mt-5">
             <source src={meaning.phonetics[1].audio} />
          </audio>
        }
      </div>

      <div className="d-flex audio-div ms-4">
        {
          meaning && meaning.phonetics && meaning.phonetics[0].audio == "" && meaning.phonetics[1].audio == "" && meaning.phonetics[2].audio
          &&
          <audio controls className="mt-5">
             <source src={meaning.phonetics[2].audio} />
          </audio>
        }
      </div>
      
      <div className="d-flex flex-column meaning-div mt-4 ps-3" style={{ color: props.mode === "light" ? "black" : "white" }}>
      {meaning &&
        (meaning.meanings).map((currentElement) => {
          return (
            <div key={currentElement.definitions[0].definition}>
              <h4 className="" style={{color:"#5dbea3"}}>{currentElement.partOfSpeech}</h4>
              <p>Meaning : {currentElement.definitions[0].definition}</p>
              {currentElement.definitions[0].example && <p>Example : { currentElement.definitions[0].example}</p>}
              <hr/>
            </div>
          );
        })}
        </div>
        </section>
    </>
  );
};

export default Dictionary;
