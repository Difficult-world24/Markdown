import React from "react";
import { EditorState } from "draft-js";

export const markdownContext = React.createContext();
//Draft-Js BoilerPlate;
const editorState = EditorState.createEmpty();

class Markdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorState: editorState };
    this.setEditorState = this.setEditorState.bind(this);
  }
  setEditorState(newEditorState) {
    this.setState({ editorState: newEditorState });
  }
  render() {
    const { editorState } = this.state;
    const { setEditorState } = this;
    return (
      <markdownContext.Provider value={{ editorState, setEditorState }}>
        {this.props.children}
      </markdownContext.Provider>
    );
  }
}

export default Markdown;
