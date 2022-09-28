import React from 'react'
import {Controlled as CodeMirror} from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
const Editor = (props) => {
    const {
        language,
        displayName,
        value,
        onChange,
    } = props

    function handleChange(editor,data,value){
        onChange(value);

    }
  return (
    <div className='editor-box w-50 ' >

<div className='editor-title text-light fs-1'>Code Here</div>
<CodeMirror
onBeforeChange = {handleChange}
value = {value}
className = 'codemirror'
options = {{
    lineNumbers :true,
    theme:'material',
    mode:language
    
}}

/>
    </div>
  )
}

export default Editor