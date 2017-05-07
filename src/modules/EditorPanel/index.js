import CodeMirror from 'react-codemirror';
import 'codemirror/mode/xml/xml';
import 'codemirror/lib/codemirror.css';

import React, { Component } from 'react';

class EditorPanel extends Component {
  componentDidMount() {
    console.log(this.editor);
  }
  render() {
    return (
      <div style={{ width: '100%', height: 400 }}>
        <CodeMirror
          ref={c => (this.editor = c)}
          options={{ mode: 'xml', lineNumbers: true }}
        />
      </div>
    );
  }
}

export default EditorPanel;
