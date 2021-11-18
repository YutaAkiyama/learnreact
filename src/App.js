import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickShow = () => {
    setshowFlag(!showFlag);
  };

  const [num, setNum] = useState(0);
  const [showFlag, setshowFlag] = useState(false);

  const contentStyle = {
    color: "blue"
  };
  return (
    <>
      <h1 style={contentStyle}>こんにちは</h1>
      <p>aaaaa</p>

      <ColorfulMessage color="blue">お元気ですか</ColorfulMessage>
      <ColorfulMessage color="pink">げんきです</ColorfulMessage>

      <button onClick={onClickCountUp}>カウントアップ</button>
      <button onClick={onClickShow}>onoff</button>
      <p>{num}</p>
      {showFlag && <p>aaaaaaaaaa</p>}
    </>
  );
};

export default App;
