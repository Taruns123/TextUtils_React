import React, {useState} from 'react'





export default function TextForm(props) {
    const handleUpClick = (event)=>{
        event.preventDefault();
        console.log('btn was clicked');
        let newText = Text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = (event)=>{
        event.preventDefault();
        console.log('btn was clicked');
        let newText = Text.toLowerCase();
        setText(newText);
    }
    const handleReset = (event)=>{
        event.preventDefault();
        console.log('btn was clicked');
        let newText = "";
        setText(newText);
    }
    
    const handleOnChange=(event)=>{
        event.preventDefault();
        console.log('change');
        setText(event.target.value);
    }
    const [Text, setText] = useState('enter text here');
  return (
  <form >
  <h1>{props.heading}</h1>
  <div className="my-3" >
    <label htmlFor="myBox" className="form-label">Email address</label>
    <textarea  className="form-control" value = {Text} id="myBox"  onChange={handleOnChange} rows={8}  style = {{backgroundColor : props.mode==='dark'?'#16213E':'white', color : props.mode==='dark'?'white':'black'}} ></textarea>
    <button className="btn btn-primary mx-3 my-3" onClick={handleUpClick} >Convert to UPPERCASE</button>
    <button className="btn btn-primary mx-3 my-3" onClick={handleLowClick} >Convert to lowercase</button>
    <button className="btn btn-primary mx-3 my-3" onClick={handleReset} >Reset</button>

  </div>
  <div className='container my-3'>
    <h1>Your text summary here</h1>
    <p>your text contains {Text.split(" ").length}words and {Text.length} characters</p>
    <p>time to read {Text.split(" ").length * 0.008} </p>
    <h2>Preview</h2>
    <p>{Text}</p>
  </div>
 
</form>
  )
}
