import { useState } from 'preact/hooks';

export default function InteractiveOrIdle({thoseOptions}) {

  const randomMessage = () => thoseOptions[(Math.floor(Math.random() * thoseOptions.length))];

  const [Option2, setOption2] = useState(thoseOptions[0]);

  return (
    <div>
      <h3>Do you want an interactive option or an idle one?</h3>
      <button onClick={() => setOption2(randomMessage())}>
        New Option
      </button>
      <p><strong>Your selection: {Option2}</strong></p>
    </div>
  );
}