import React from "react";
import { Box } from "@mui/material";
import { withStyles } from "@mui/styles";
import styles from "./styles/EditorInputStyles";
import { markdownContext } from "./context/MarkdownContext";
import { Editor, RichUtils } from "draft-js";

class EditorInput extends React.PureComponent {
  static contextType = markdownContext;
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }

  componentDidMount() {
    this.ref.current.focus();
  }

  handleKeyCommand(command, editorState) {
    const newEditorState = RichUtils.handleKeyCommand(editorState, command);
    if (newEditorState) {
      this.context.setEditorState(newEditorState);
      return "handled";
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
        />
      </Box>
    );
  }
}
export default withStyles(styles)(EditorInput);
