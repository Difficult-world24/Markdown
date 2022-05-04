const getWordCount = (editorState) => {
  const plainText = editorState.getCurrentContent().getPlainText("");
  const regex = /(?:\r\n|\r|\n)/g; // new line, carriage return, line feed
  const cleanString = plainText.replace(regex, " ").trim(); // replace above characters w/ space
  const wordArray = cleanString.match(/\S+/g); // matches words according to whitespace
  return wordArray ? wordArray.length : 0;
};

const getColNum = (editorState) => {
  const editorSelection = editorState.getSelection();
  return editorSelection.getEndOffset();
};

const getLineNum = (editorState) => {
  const editorSelection = editorState.getSelection();
  const anchorKey = editorSelection.getAnchorKey();
  const currentContent = editorState.getCurrentContent();
  const BlockMapArray = currentContent.getBlocksAsArray();
  const currentBlockKey = currentContent.getBlockForKey(anchorKey).getKey();

  const currentLineNumber = BlockMapArray.findIndex(
    (block) => currentBlockKey === block.key
  );

  return currentLineNumber + 1;
};

const getTotalLine = (editorState) => {
  const currentContent = editorState.getCurrentContent();
  const BlockMapArray = currentContent.getBlocksAsArray();
  return BlockMapArray.length;
};

export default function editorUtility(edState) {
  let wordCount = getWordCount(edState);
  let columnNumber = getColNum(edState);
  let lineNumber = getLineNum(edState);
  let lines = getTotalLine(edState);
  return { wordCount, columnNumber, lineNumber, lines };
}

function getBlockSelection(edState) {
  const selectionState = edState.getSelection();
  const anchorKey = selectionState.getAnchorKey();
  const focusKey = selectionState.getFocusKey();
  const anchorOffset = selectionState.getStartOffset();
  const focusOffSet = selectionState.getEndOffset();
  return { anchorKey, focusKey, anchorOffset, focusOffSet, selectionState };
}
export { getBlockSelection };
