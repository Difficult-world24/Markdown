import React from "react";
import { Box } from "@mui/material";
import { withStyles } from "@mui/styles";
import styles from "./styles/EditorInputStyles";
import { markdownContext } from "./context/MarkdownContext";
import { TextHeadingOne, TextItalic } from "../utils/editorFunctions";
import { Editor, getDefaultKeyBinding, KeyBindingUtil } from "draft-js";
//import "draft-js/dist/Draft.css";
const { hasCommandModifier } = KeyBindingUtil;

class EditorInput extends React.PureComponent {
  static contextType = markdownContext;
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.handleKeyBinding = this.handleKeyBinding.bind(this);
  }

  componentDidMount() {
    this.ref.current.focus();
  }

  handleKeyBinding(e) {
    if (e.keyCode === 72 && hasCommandModifier(e)) {
      return "heading-one";
    } else if (e.keyCode === 73 && hasCommandModifier(e)) {
      return "italic";
    }
    return getDefaultKeyBinding(e);
  }

  handleKeyCommand(command, edState) {
    const { setEditorState, editorState } = this.context;

    if (command === "heading-one") {
      const makeHeadingOne = TextHeadingOne(editorState);
      setEditorState(makeHeadingOne);
    } else if (command === "italic") {
      const makeItalic = TextItalic(editorState);
      setEditorState(makeItalic);
    }

    return "not-handled";
  }

  render() {
    const { classes } = this.props;
    const { setEditorState, editorState } = this.context;
    return (
      <Box
        component="section"
        className={classes.editorSection}
        onClick={() => this.ref.current.focus()}
      >
        <Editor
          ref={this.ref}
          editorState={editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={setEditorState}
          keyBindingFn={this.handleKeyBinding}
        />
      </Box>
    );
  }
}
export default withStyles(styles)(EditorInput);
