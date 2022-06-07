import { EditorState, Modifier } from "draft-js";
import { getBlockSelection } from "./editorUtility";

function ContentModifier(edState, modifier, modifierType) {
  const { selectionState } = getBlockSelection(edState);
  const currentContent = edState.getCurrentContent();

  let newContentState = Modifier.insertText(
    currentContent,
    selectionState,
    modifier
  );
  let updatedEdState = EditorState.push(edState, newContentState, modifierType);
  return updatedEdState;
}

function TextHeadingOne(edState) {
  const updatedEditorState = ContentModifier(edState, "# ", "heading-one");
  return updatedEditorState;
}

function TextItalic(edState) {
  const updatedEditorState = ContentModifier(edState, "** ", "italic");

  const { selectionState, anchorKey, anchorOffSet } =
    getBlockSelection(edState);

  const updatedSelection = selectionState.merge({
    anchorKey,
    anchorOffset: anchorOffSet + 1,
    focusOffset: anchorOffSet + 1,
  });

  return EditorState.forceSelection(updatedEditorState, updatedSelection);
}

function TextLink(edState, linkText, linkUrl) {
  const markdownLink = `[${linkText}](https://${linkUrl})`;

  const updatedEditorState = ContentModifier(
    edState,
    markdownLink,
    "link-added"
  );
  return updatedEditorState;
}

function TextEmoji(edState, emojiObject) {
  const { emoji } = emojiObject;
  const updatedEditorState = ContentModifier(
    edState,
    `${emoji}`,
    `emoji-added`
  );

  return updatedEditorState;
}

export { TextHeadingOne, TextItalic, TextLink, TextEmoji };
