import React from 'react';

class Editor extends React.Component {
    render(){
    return (
        <div id="editor-div">
            <h2 id="editor-title" className="editor-previewer">Editor</h2>
            <textarea id="editor" value={this.props.input} onChange={this.props.handleChange} />
        </div>
    )
    }
};

export default Editor;