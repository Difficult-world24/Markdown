import React from "react";
import { Grid } from "@mui/material";
import { withStyles } from "@mui/styles";
import EditorInput from "./EditorInput";
import EditorConsole from "./EditorConsole";
import EditorNavBar from "./EditorNavBar";
import EditorPreviewer from "./EditorPreviewer";
import Markdown from "./context/MarkdownContext";
import styles from "./styles/EditorStyles";

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showPreviewer: true, showEditorConsole: true };
    this.togglePreviewer = this.togglePreviewer.bind(this);
    this.toggleEditorConsole = this.toggleEditorConsole.bind(this);
  }

  togglePreviewer() {
    this.setState((prevState) => {
      return { showPreviewer: !prevState.showPreviewer };
    });
  }

  toggleEditorConsole() {
    this.setState((prevState) => {
      return { showEditorConsole: !prevState.showEditorConsole };
    });
  }
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
            <EditorConsole />
          </Grid>
        </Grid>
      </Markdown>
    );
  }
}

export default withStyles(styles)(Editor);
