import React from "react";
import { Grid } from "@mui/material";
import { withStyles } from "@mui/styles";
import EditorInput from "./EditorInput";
import EditorFooter from "./EditorFooter";
import EditorNavBar from "./EditorNavBar";
import EditorPreviewer from "./EditorPreviewer";
import Markdown from "./context/MarkdownContext";
import styles from "./styles/EditorStyles";

class Editor extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Markdown>
        <Grid container component="section" className={classes.container}>
          <Grid item gridRow="1">
            <EditorNavBar />
          </Grid>
          <Grid item gridRow="2" className={classes.containerSection}>
            <EditorInput />
            <EditorPreviewer />
          </Grid>
          <Grid item gridRow="3">
            <EditorFooter />
          </Grid>
        </Grid>
      </Markdown>
    );
  }
}

export default withStyles(styles)(Editor);
