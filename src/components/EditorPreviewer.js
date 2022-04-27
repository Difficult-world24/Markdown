import React from "react";
import { Container, Box } from "@mui/material";
import { withStyles } from "@mui/styles";
import styles from "./styles/EditorPreviewerStyles";
import Markdown from "marked-react";
import { markdownContext } from "./context/MarkdownContext";

class EditorPreviewer extends React.Component {
  static contextType = markdownContext;
  render() {
    const { classes } = this.props;
    let editorText = this.context.editorPlainText();
    return (
      <Container
        className={classes.previwerSection}
        component="section"
        disableGutters
      >
        <Box className={classes.container}>
          <Box className={classes.previwerControls}>
            <button className={classes.previwerControlBtn}>
              <i className="ri-eye-fill"></i>
            </button>
            <button
              className={`${classes.previwerControlBtn} ${classes.active}`}
            >
              <i className="ri-side-bar-fill"></i>
            </button>
            <button className={classes.previwerControlBtn}>
              <i className="ri-eye-close-fill"></i>
            </button>
          </Box>
        </Box>
        <Box className={classes.outputSection}>
          <Markdown value={editorText} />
        </Box>
      </Container>
    );
  }
}
export default withStyles(styles)(EditorPreviewer);
