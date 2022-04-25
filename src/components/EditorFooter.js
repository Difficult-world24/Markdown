import React from "react";
import { Stack, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import styles from "./styles/EditorFooterStyles";

//const getWordCount = (editorState) => {
//const plainText = editorState.getCurrentContent().getPlainText("");
//const regex = /(?:\r\n|\r|\n)/g; // new line, carriage return, line feed
//const cleanString = plainText.replace(regex, " ").trim(); // replace above characters w/ space
//const wordArray = cleanString.match(/\S+/g); // matches words according to whitespace
//return wordArray ? wordArray.length : 0;
//};

class EditorFooter extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <Stack
        className={classes.footer}
        sx={{
          bgcolor: "secondary.dark",
          width: "100%",
        }}
      >
        <Typography className={classes.label}>Markdown</Typography>
        <ul className={classes.ul}>
          <li className={classes.label}>
            <Typography>
              <span>0</span>words
            </Typography>
          </li>
          <li className={classes.label}>
            <Typography>
              <span>8</span>lines
            </Typography>
          </li>
          <li className={classes.label}>
            <Typography>
              <span>Ln 15,</span>
            </Typography>
          </li>
          <li className={classes.label}>
            <Typography>
              <span>Col 18</span>
            </Typography>
          </li>
        </ul>
      </Stack>
    );
  }
}
export default withStyles(styles)(EditorFooter);
