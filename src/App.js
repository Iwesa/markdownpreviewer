import { useState } from "react"
import Markdown from "marked-react"
import './styles.css'

function Editor({ onType, text }) {
    return (
        <div className="container editor">
            <label htmlFor="editor" className="label">Editor</label>
            <textarea id="editor" cols={80} rows={15} onChange={onType}>{text}</textarea>
        </div>
    )
}

function Previewer({ value }) {
    return (
        <div className="container preview">
            <label htmlFor="preview" className="label">Preview</label>
            <p id="preview"><Markdown breaks={true}>{value}</Markdown></p>
        </div>
    )
}

export default function App() {
    const [value, setValue] = useState('```function textMe(){}```');

    function handleChange(e) {
        setValue(e.target.value)
    }

    return (
        <div className="main">
            <Editor onType={handleChange} text={value} />
            <Previewer value={value} />
        </div>
    )
}