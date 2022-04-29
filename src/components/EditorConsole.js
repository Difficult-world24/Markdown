import React from "react";
import { Stack, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import styles from "./styles/EditorFooterStyles";
import { markdownContext } from "./context/MarkdownContext";

class EditorConsole extends React.PureComponent {
  static contextType = markdownContext;

  render() {
    const { classes } = this.props;
    const { editorInfo } = this.context;

    return (
      <Stack className={classes.footer} sx={{ bgcolor: "secondary.dark" }}>
        <Typography className={classes.label}>Markdown</Typography>
        <ul className={classes.ul}>
          <li className={classes.label}>
            <Typography>
              <span>{editorInfo.wordCount}</span>words
            </Typography>
          </li>
          <li className={classes.label}>
            <Typography>
              <span>{editorInfo.lines}</span>lines
            </Typography>
          </li>
          <li className={classes.label}>
            <Typography>
              <span>Ln {editorInfo.lineNumber},</span>
            </Typography>
          </li>
          <li className={classes.label}>
            <Typography>
              <span>Col {editorInfo.columnNumber}</span>
            </Typography>
          </li>
        </ul>
      </Stack>
    );
  }
}
export default withStyles(styles)(EditorConsole);
