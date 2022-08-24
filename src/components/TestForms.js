import React, { useState } from 'react'
//import { useSpeechSynthesis } from 'react-speech-kit';
export default function TestForms(props) {
  //let {speak} = useSpeechSynthesis();
  const handleUpClick = () => {

    let newText = text.toUpperCase();
    setText(newText)
    props.alert('upper words', 'success')
  }
  const handlelowClick = () => {

    let newText = text.toLowerCase();
    setText(newText)
    props.alert('Lower words', 'success')
  }
  const handleclearClick = () => {

    let newText = "";
    setText(newText)
    props.alert('Masage clear', 'success')
  }
  const handleOnChange = (event) => {

    setText(event.target.value)

  }
  const onAlternatingCase = () => {
    let newtext = ""
    for (let index = 0; index < text.length; index++) {
      if ((index % 2) === 0) {
        newtext += text[index].toLowerCase()
      }
      else {
        newtext += text[index].toUpperCase()
      }

    }
    setText(newtext)
  }
  const reverseText = () => {
    let newText = text.split('').reverse().join('');
    setText(newText);
    props.alert('Reverse massage', 'success')
  }

  // const handleOnspeek = () => {
  //   speak({text:text})
  // }
  const [text, setText] = useState('Enter text here2');
  return (
    <>

      <div className='container'>
        <div class="form-group">
          <label for="exampleFormControlTextarea1" style={{color:props.mode==='dark'?'black':'white'}} >{props.heading}</label>
          <textarea class="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpClick} >Convert uppercase</button>
        <button className='btn btn-primary mx-2' onClick={handlelowClick} >Convert Loercase</button>
        <button className='btn btn-primary mx-2' onClick={handleclearClick} >Clear Text</button>
        <button className='btn btn-primary mx-2' onClick={onAlternatingCase} >Alternate Text</button>
        <button className='btn btn-primary mx-2' onClick={reverseText} >Reverse Text</button>
        {/* //<button className='btn btn-primary mx-2' onClick={handleOnspeek} >Spesk here</button> */}
      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'black':'white'}}>
        <h3 >Your Text Summary</h3>
        <p>{text.split(" ").length} and {text.length}</p>
        <p>{0.008 * text.split(" ").length} Minutes Reading</p>
        <div className="container my-3">
          <h4 >Preview</h4>
          <p>{text.length>0?text:"Enter somthing obov eto preview here"}</p>
        </div>


      </div>
    </>
  )
}
