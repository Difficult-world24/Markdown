import React from "react";
import { EditorState, ContentState } from "draft-js";
import editorUtility from "../../utils/editorUtility";
export const markdownContext = React.createContext();

const text = `
# Components

//Must Work on Below Things!!

- [ ] EditorNavBar
      // working on it
  - [ ] EmojiPicker
        // Which works under Modal
        and Has an shortcut key (Ctrl+e)
  - [x] LinkButton
  - [ ] Order/Unordered List
  - [ ] Code
- [ ] EditorMain
  - [ ] Editor
  - [ ] EditorPreviewer
    - [ ] Write markdown output StylesSheet(CSS)
    - [ x ] toggleNavbarButton
    - [ x ] toggleFooterButton
    - [ ] readerModeButton
      - [ ] editFileButton
- [ x ] EditorFooter
  - [ x ] wordCount
  - [ x ] lineCount
  - [ x ] currentLine
  - [ x ] currentCol

# Options for Modifiing ContentBlock(s)

# Components

//Must Work on Below Things!!

- [ ] EditorNavBar
      // working on it
  - [ ] EmojiPicker
        // Which works under Modal
        and Has an shortcut key (Ctrl+e)
  - [x] LinkButton
  - [ ] Order/Unordered List
  - [ ] Code
- [ ] EditorMain
  - [ ] Editor
  - [ ] EditorPreviewer
    - [ ] Write markdown output StylesSheet(CSS)
    - [ x ] toggleNavbarButton
    - [ x ] toggleFooterButton
    - [ ] readerModeButton
      - [ ] editFileButton
- [ x ] EditorFooter
  - [ x ] wordCount
  - [ x ] lineCount
  - [ x ] currentLine
  - [ x ] currentCol

# Options for Modifiing ContentBlock(s)


`;
//Draft-Js BoilerPlate;
const editorState = EditorState.createWithContent(
  ContentState.createFromText(text)
);

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
