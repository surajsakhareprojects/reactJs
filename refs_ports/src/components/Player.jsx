import { useRef, useState } from "react";

export default function Player() {

  const playreName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState('');

  function handelbtnClick() {
    setEnteredPlayerName(playreName.current.value);
    playreName.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome { enteredPlayerName ?? 'unkonwn player' }</h2>
      <p>
        <input
        type="text" 
        ref={playreName} />
        <button onClick={handelbtnClick}>Set Name</button>
      </p>
    </section>
  );
}
