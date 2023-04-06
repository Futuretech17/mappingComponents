import React from "react";
import emojipedia from "../emojipedia";
import Emojicard from "./Emojicard";

function App() {
  const createEmojiCard = (emoji) => {
    return (
      <Emojicard
        key={emoji.id}
        emoji={emoji.emoji}
        name={emoji.name}
        meaning={emoji.meaning}
      />
    );
  };
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEmojiCard)}</dl>
    </div>
  );
}

export default App;
