import React from "react";
import { markdownContext } from "./context/MarkdownContext";
import {
  TextHeadingOne,
  TextItalic,
  TextLink,
  TextEmoji,
} from "../utils/editorFunctions";
import EditorButton from "./EditorButton";
import EmojiPicker from "./EmojiPicker";
import {
  AppBar,
  Button,
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import { withStyles } from "@mui/styles";
import styles from "./styles/EditorNavBarStyles";

class EditorNavBar extends React.PureComponent {
  static contextType = markdownContext;
  constructor(props) {
    super(props);
    this.state = {
      linkDialog: false,
      emojiDialog: false,
      linkText: "",
      linkUrl: "",
    };
    this.makeHeading = this.makeHeading.bind(this);
    this.makeItalic = this.makeItalic.bind(this);
    this.addEmoji = this.addEmoji.bind(this);
    this.toggleLinkDialog = this.toggleLinkDialog.bind(this);
    this.toggleEmojiDialog = this.toggleEmojiDialog.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.insertLink = this.insertLink.bind(this);
  }

  addEmoji(emojiObject) {
    let newEditorState = TextEmoji(this.context.editorState, emojiObject);
    this.context.setEditorState(newEditorState);
    this.setState({ emojiDialog: false });
  }

  toggleLinkDialog() {
    this.setState(function (st) {
      return { linkDialog: !st.linkDialog };
    });
  }

  toggleEmojiDialog() {
    this.setState(function (st) {
      return { emojiDialog: !st.emojiDialog };
    });
  }

  insertLink() {
    const { linkText, linkUrl } = this.state;
    let newEditorState = TextLink(this.context.editorState, linkText, linkUrl);
    this.context.setEditorState(newEditorState);
    this.setState({ linkDialog: false, linkText: "", linkUrl: "" });
  }

  makeHeading() {
    let newEditorState = TextHeadingOne(this.context.editorState);
    this.context.setEditorState(newEditorState);
  }

  makeItalic() {
    let newEditorState = TextItalic(this.context.editorState);
    this.context.setEditorState(newEditorState);
  }
  handleChange(evt) {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  }
  render() {
    const { handleChange, toggleLinkDialog, toggleEmojiDialog, insertLink } =
      this;
    const { classes } = this.props;
    const { linkDialog, linkUrl, linkText, emojiDialog } = this.state;
    return (
      <AppBar color="primary" position="static" className={classes.container}>
        <Box className={classes.btnGroup}>
          <EditorButton toolTitle="Bold (Ctrl+b)">
            <i className="ri-bold"></i>
          </EditorButton>
          <EditorButton toolTitle="Italic (Ctrl+i)" onclick={this.makeItalic}>
            <i className="ri-italic"></i>
          </EditorButton>
          <EditorButton toolTitle="Heading (Ctrl+h)" onclick={this.makeHeading}>
            <i className="ri-heading"></i>
          </EditorButton>

          <EditorButton toolTitle="Code Block">
            <i className="ri-code-view"></i>
          </EditorButton>
          <EditorButton toolTitle="Unordered List Item">
            <i className="ri-list-unordered"></i>
          </EditorButton>
          <EditorButton toolTitle="Create a link" onclick={toggleLinkDialog}>
            <i className="ri-link"></i>
          </EditorButton>
          <Box className={classes.emojiContainer}>
            <EditorButton toolTitle="Pick a Emoji" onclick={toggleEmojiDialog}>
              <i className="ri-emotion-laugh-line"></i>
            </EditorButton>
            {emojiDialog && <EmojiPicker addEmoji={this.addEmoji} />}
          </Box>
        </Box>
        <Typography
          variant="h6"
          sx={{ fontFamily: "Monospace", fontWeight: "bold", mr: 1 }}
        >
          Markdown Editor
        </Typography>
        <Dialog open={linkDialog} onClose={toggleLinkDialog}>
          <DialogTitle>Create a link</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              fullWidth
              variant="standard"
              label="Link Text"
              name="linkText"
              margin="dense"
              value={linkText}
              onChange={handleChange}
            />
            <TextField
              variant="standard"
              fullWidth
              name="linkUrl"
              label="URL"
              margin="dense"
              helperText="Write URL without 'https://'."
              value={linkUrl}
              onChange={handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={toggleLinkDialog}>Close</Button>
            <Button onClick={insertLink}>Done</Button>
          </DialogActions>
        </Dialog>
      </AppBar>
    );
  }
}
export default withStyles(styles)(EditorNavBar);
