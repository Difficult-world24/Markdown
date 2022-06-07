import "../markdown.css";
import React from "react";
import { Container, Box, Tooltip, IconButton } from "@mui/material";
import { withStyles } from "@mui/styles";
import styles from "./styles/EditorPreviewerStyles";
import Markdown from "marked-react";
import { markdownContext } from "./context/MarkdownContext";

class EditorPreviewer extends React.Component {
  static contextType = markdownContext;
  render() {
    const {
      classes,
      showEditorConsole,
      showNavbar,
      readerMode,
      toggleReaderMode,
      toggleNavbar,
      toggleEditorConsole,
    } = this.props;

    let editorText = this.context.editorPlainText();
    return (
      <Container
        className={`${readerMode ? classes.center : ""} ${
          classes.previwerSection
        }`}
        component="section"
        disableGutters
      >
        <Box className={classes.container}>
          {!readerMode && (
            <Box className={classes.previwerControls}>
              <Box>
                <Tooltip
                  title={`${showNavbar ? "Hide" : "Show"} Navbar`}
                  disableInteractive
                >
                  <button
                    onClick={toggleNavbar}
                    className={`${classes.previwerControlBtn}
                  `}
                  >
                    <i
                      className={`ri-eye-${
                        showNavbar ? "close-line" : "fill"
                      } `}
                    ></i>
                  </button>
                </Tooltip>
                <Tooltip title="Toggle Reader Mode" disableInteractive>
                  <button
                    className={`${classes.previwerControlBtn}`}
                    onClick={toggleReaderMode}
                  >
                    <i className="ri-side-bar-fill"></i>
                  </button>
                </Tooltip>
              </Box>
              <Box>
                <Tooltip
                  title={`${showEditorConsole ? "Hide" : "Show"} Console`}
                  disableInteractive
                >
                  <button
                    className={`${classes.previwerControlBtn} 
                    ${classes.faceDown} `}
                    onClick={toggleEditorConsole}
                  >
                    <i
                      className={`ri-side-bar-${
                        showEditorConsole ? "fill" : "line"
                      }`}
                    ></i>
                  </button>
                </Tooltip>
              </Box>
            </Box>
          )}
        </Box>
        <Box
          className={`${classes.outputSection} markdown-body`}
          component="article"
        >
          {readerMode && (
            <Box component="span">
              <Tooltip title="Back to writting" disableInteractive>
                <IconButton
                  color="primary"
                  aria-label="write"
                  onClick={toggleReaderMode}
                >
                  <i className="ri-pencil-fill"></i>
                </IconButton>
              </Tooltip>
            </Box>
          )}
          <Markdown value={editorText} />
        </Box>
      </Container>
    );
  }
}
export default withStyles(styles)(EditorPreviewer);
