import React from "react";
import { Box } from "@mui/material";
import { withStyles } from "@mui/styles";
import styles from "./styles/EditorStyles";
import { markdownContext } from "./context/MarkdownContext";
import { Editor } from "draft-js";

class EditorInput extends React.Component {
  static contextType = markdownContext;
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    const { setEditorState, editorState } = this.context;
    return (
      <Box component="section" className={classes.editorSection}>
        <Editor editorState={editorState} onChange={setEditorState} />
      </Box>
    );
  }
}
export default withStyles(styles)(EditorInput);
