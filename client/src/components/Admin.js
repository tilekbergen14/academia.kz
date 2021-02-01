import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react"

export default function Admin() {
  const [ richtext, setRichText ] = useState("")
  const [ blog, setBlog ] = useState("")
  const handleRichTextChange = (e) => {
    setRichText(e.target.getContent())
  }
const handleRichText = (e) => {
    e.preventDefault()
    setBlog(richtext)
  }
  return (
    <div className="container mt-3">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Title"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
      </div>
    <form onSubmit={handleRichText}>
        <Editor apiKey='vg0xjcazbqoqck8epvkf9drt57lat3tyo4yycxzxupilmq1o' 
            init={{ 
                plugins: 'codesample a11ychecker advcode casechange formatpainter linkchecker autolink lists checklist media mediaembed pageembed permanentpen powerpaste table advtable tinycomments tinymcespellchecker',
                toolbar: 'codesample a11ycheck addcomment showcomments casechange checklist code formatpainter pageembed permanentpen table',
                toolbar_mode: 'floating',
                tinycomments_mode: 'embedded',
                tinycomments_author: 'Author name',
                codesample_global_prismjs: true
                }}
            onChange={handleRichTextChange} 
        />
        <button type="submit" className="btn btn-primary my-3">Click</button>
        <div dangerouslySetInnerHTML={{__html: blog}}/>
    </form>
    </div>
  );
}
