import { useState } from 'preact/hooks';

export default function FunOrInformative({theseOptions}) {

  const randomMessage = () => theseOptions[(Math.floor(Math.random() * theseOptions.length))];

  const [Option1, setOption1] = useState(theseOptions[0]);

  return (
    <div>
      <h3>Do you want a fun option or an informative one?</h3>
      <button onClick={() => setOption1(randomMessage())}>
        New Option
      </button>
      <p><strong>Your selection: {Option1}</strong></p>
    </div>
  );
}