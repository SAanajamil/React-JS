import React, {useState} from "react";

export default function TextForm(props) {
    const [text, setText] = useState("Enter Text")

    const handleUPClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClearClick = ()=>{
      let newText = '';
      setText(newText)
  }

  const handleCopy = ()=>{
    var text = document.getElementById('exampleFormControlTextarea1')
    text.select();
    navigator.clipboard.writeText(text.value)
  }

  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

   
    const handleOnChange = (eve)=>{
        setText(eve.target.value)
    }
  return (
      <>
    <div>
      <h3>{props.heading}</h3>
      <div className="mb-3 my-3">
                <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8" value={text} 
          onChange={handleOnChange}
        ></textarea>
        
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUPClick}>Converd to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Converd to LowerCase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}> Remove Extra Space</button>


    </div>
    <div className="contanier my-3">
        <h3>Text Summary</h3>
        <p>{text.split(" ").length} words and {text.length} Characters. 
        </p>
    </div>
    <div className="container">
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  );
}
