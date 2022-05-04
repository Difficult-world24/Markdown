import { EditorState, Modifier } from "draft-js";
import { getBlockSelection } from "./editorUtility";

function TextHeadingOne(edState) {
  const { anchorKey, focusKey, selectionState } = getBlockSelection(edState);
  const currentContent = edState.getCurrentContent();
  const currentContentBlock = currentContent.getBlockForKey(anchorKey);
  const headingText = `# Some Text Here`;

  if (currentContentBlock.getLength() === 0) {
    /*
    NOTE:If ContentBlock has text?
    then the EditorState passed as an argument will be returned.
    Otherwise headingText variable will be inserted into ContentBlock;
    */
    const newSelectionState = selectionState.merge({
      anchorKey,
      focusKey,
      anchorOffset: 2,
      focusOffset: headingText.length,
      hasFocus: true,
    });

    const newContentState = Modifier.insertText(
      currentContent,
      selectionState,
      headingText
    );
    const editorStateWithHeading = EditorState.push(
      edState,
      newContentState,
      "heading-one-added"
    );

    const newEditorState = EditorState.forceSelection(
      editorStateWithHeading,
      newSelectionState
    );
    return newEditorState;
  }
  return edState;
}

export { TextHeadingOne };
