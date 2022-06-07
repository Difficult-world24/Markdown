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
    this.state = {
      showEditorConsole: true,
      showNavbar: true,
      readerMode: false,
    };
    this.toggleEditorConsole = this.toggleEditorConsole.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.toggleReaderMode = this.toggleReaderMode.bind(this);
  }

  toggleReaderMode() {
    this.setState((prevState) => {
      let toggle = prevState.readerMode ? true : false;
      return {
        readerMode: !prevState.readerMode,
        showEditorConsole: toggle,
        showNavbar: toggle,
      };
    });
  }

  toggleNavbar() {
    this.setState((prevState) => {
      return { showNavbar: !prevState.showNavbar };
    });
  }
  toggleEditorConsole() {
    this.setState((prevState) => {
      return { showEditorConsole: !prevState.showEditorConsole };
    });
  }
  render() {
    const { classes } = this.props;
    const { showEditorConsole, showNavbar, readerMode } = this.state;
    const { toggleEditorConsole, toggleNavbar, toggleReaderMode } = this;

    const editorConfig = {
      showEditorConsole,
      showNavbar,
      readerMode,
      toggleEditorConsole,
      toggleNavbar,
      toggleReaderMode,
    };
    return (
      <Markdown>
        <Grid container component="section" className={classes.container}>
          {showNavbar && (
            <Grid item gridRow="1">
              <EditorNavBar />
            </Grid>
          )}
          <Grid
            item
            gridRow="2"
            className={`${classes.containerSection} ${
              readerMode ? classes.singleContainer : ""
            }`}
          >
            {!readerMode && <EditorInput />}
            <EditorPreviewer {...editorConfig} />
          </Grid>
          {showEditorConsole && (
            <Grid item gridRow="3">
              <EditorConsole />
            </Grid>
          )}
        </Grid>
      </Markdown>
    );
  }
}

export default withStyles(styles)(Editor);
