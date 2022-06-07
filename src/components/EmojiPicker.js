import React, { useState } from "react";
import Picker from "emoji-picker-react";

function EmojiPicker(props) {
  const { addEmoji } = props;
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
    addEmoji(emojiObject);
  };
  return (
    <>
      <Picker
        onEmojiClick={onEmojiClick}
        pickerStyle={{
          fontFamily: "Monospace",
          position: "absolute",
          right: "0",
          top: "100%",
          marginTop: "0.2em",
        }}
        native
      />
    </>
  );
}

export default EmojiPicker;
