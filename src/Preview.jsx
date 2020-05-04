import React from 'react';
import marked from 'marked';

// ALLOWS LINE BREAKS WITH RETURN BUTTON
marked.setOptions({
    breaks: true,
});

class Preview extends React.Component {

    render(){
    return (
    <div id="preview-div">
        <h2 id="previewer-title" className="editor-previewer">Preview</h2>
        <div id="preview" dangerouslySetInnerHTML = {{__html: marked(this.props.input)}}></div>
    </div>
    )
    }
};

export default Preview;