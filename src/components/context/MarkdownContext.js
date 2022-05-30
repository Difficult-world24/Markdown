import React from "react";
import { EditorState, CompositeDecorator } from "draft-js";
import editorUtility from "../../utils/editorUtility";

export const markdownContext = React.createContext();
//Draft-Js BoilerPlate;
const editorState = EditorState.createEmpty();

class Markdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorState };
    this.setEditorState = this.setEditorState.bind(this);
    this.editorPlainText = this.editorPlainText.bind(this);
  }
  setEditorState(newEditorState) {
    this.setState({ editorState: newEditorState });
  }
  editorPlainText() {
    const currentContent = this.state.editorState.getCurrentContent();
    return currentContent.getPlainText();
  }

  render() {
    const { editorState } = this.state;
    const { setEditorState, editorPlainText } = this;
    let editorInfo = editorUtility(editorState);
    return (
      <markdownContext.Provider
        value={{ editorState, setEditorState, editorInfo, editorPlainText }}
      >
        {this.props.children}
      </markdownContext.Provider>
    );
  }
}

export default Markdown;
