import React from "react";
import { markdownContext } from "./context/MarkdownContext";
import { TextHeadingOne } from "../utils/editorFunctions";
import { AppBar, Button, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import styles from "./styles/EditorNavBarStyles";

class EditorNavBar extends React.PureComponent {
  static contextType = markdownContext;
  constructor(props) {
    super(props);
    this.makeHeading = this.makeHeading.bind(this);
  }

  makeHeading() {
    let newEditorState = TextHeadingOne(this.context.editorState);
    this.context.setEditorState(newEditorState);
  }

  render() {
    const { classes } = this.props;
    return (
      <AppBar color="primary" position="static" className={classes.container}>
        <div className={classes.btnGroup}>
          <Button
            size="large"
            className={`${classes.btn} ${classes.btnActive}`}
          >
            <i className="ri-bold"></i>
          </Button>
          <Button size="large" className={classes.btn}>
            <i className="ri-italic"></i>
          </Button>
          <Button
            size="large"
            className={classes.btn}
            onClick={this.makeHeading}
          >
            <i className="ri-heading"></i>
          </Button>

          <Button size="large" className={classes.btn}>
            <i className="ri-code-view"></i>
          </Button>
          <Button size="large" className={classes.btn}>
            <i className="ri-list-unordered"></i>
          </Button>
          <Button size="large" className={classes.btn}>
            <i className="ri-link"></i>
          </Button>
        </div>
        <Typography
          variant="h6"
          sx={{ fontFamily: "Monospace", fontWeight: "bold", mr: 1 }}
        >
          Markdown Editor
        </Typography>
      </AppBar>
    );
  }
}
export default withStyles(styles)(EditorNavBar);
