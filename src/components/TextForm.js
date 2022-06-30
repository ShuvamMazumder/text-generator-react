import React,{useState} from "react";

export default function TextForm(props) {

    const handleUpClick= () =>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange= (event) =>{
        setText(event.target.value);
        //onChange func use korle ekta event genrate hoy.tar sahajje amra value change krte parbo.
    }

    const [text,setText] = useState('enter text here');

  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange= {handleOnChange}

        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Continue to generate for Uppercase</button>
    </div>
  );
}


//Click -> button -> onClick()
//Change -> TextArea -> onChange()