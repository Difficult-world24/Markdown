import React from "react";
import { Container, Box, Tooltip } from "@mui/material";
import { withStyles } from "@mui/styles";
import styles from "./styles/EditorPreviewerStyles";
import Markdown from "marked-react";
import { markdownContext } from "./context/MarkdownContext";

class EditorPreviewer extends React.Component {
  static contextType = markdownContext;
  render() {
    const {
      classes,
      showPreviewer,
      showEditorConsole,
      showNavbar,
      toggleNavbar,
      toggleEditorConsole,
    } = this.props;

    let editorText = this.context.editorPlainText();
    return (
      <Container
        className={classes.previwerSection}
        component="section"
        disableGutters
      >
        <Box className={classes.container}>
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
                    className={`ri-eye-${showNavbar ? "close-line" : "fill"} `}
                  ></i>
                </button>
              </Tooltip>
              <Tooltip title="Toggle Reader Mode" disableInteractive>
                <button className={`${classes.previwerControlBtn}`}>
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
        </Box>
        <Box
          className={`${classes.outputSection} markdown-body`}
          component="article"
        >
          <Markdown value={editorText} />
        </Box>
      </Container>
    );
  }
}
export default withStyles(styles)(EditorPreviewer);
