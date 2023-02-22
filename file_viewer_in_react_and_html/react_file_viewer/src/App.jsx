import React ,{ useState, useEffect, useRef } from 'react';
import ReactQuill from 'react-quill';import "../node_modules/react-quill/dist/quill.snow.css";

function App() {
  const [body, setBody] = useState("");

  const handleBody = (e)=>{
    console.log(e);
    setBody(e);
  }
  return (
    <React.Fragment>
      <div className="App">
      <h1>A text editor using the react-quill library</h1>
        <button onClick={()=>handleFile(0)}>open file</button><button>save file</button>
        <ReactQuill placeholder='Write here'
        modules={App.modules} 
        formats={App.formats} 
        onChange={handleBody} // is the function used to set the content of the value to what is typed
        value={body}//no need to target value as it is hooked onto value property
        className="textarea"/>
      </div>
    </React.Fragment>
  )
}
App.modules = {
  toolbar: [
      [{header:"1"},{header:[2,3,4,5,6]},{ font: []}],
      [{size:[]}],
      ["bold","italic","underline","strike","blockquote"],
      [{list: "ordered"},{list:"bullet"}],
      ["link","image","video",],
      ["clean"],
      ["code-block"],
  ],
};
App.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "image",
  "video",
  "code-block",
];
export default App
