import { useState } from 'preact/hooks';
import { Image } from 'astro:assets';
import Console from '../images/playdateConsole.jpg';
import cards from '../images/cardGames.jpg';
import pursuit from '../images/trivialPursuit.jpg';
import uxbridge from '../images/uxbridgeDictionary.jpg';

export default function ProductSelector() {
  const [funOption, setFunOption] = useState('Fun');
  const [interactiveOption, setInteractiveOption] = useState('Interactive');

  const getImageForCombination = () => {
    const key = `${funOption}&${interactiveOption}`;
    const imageMap = {
      'Fun&Interactive': { img: Console, name: 'Playdate Console' },
      'Fun&Idle': { img: uxbridge, name: 'Uxbridge Dictionary' },
      'Informative&Interactive': { img: cards, name: 'Card Games' },
      'Informative&Idle': { img: pursuit, name: 'Trivial Pursuit' },
    };
    return imageMap[key];
  };

  const recommendedProduct = getImageForCombination();

  const randomFun = () => {
    const options = ['Fun', 'Informative'];
    const current = options[Math.floor(Math.random() * options.length)];
    setFunOption(current);
  };

  const randomInteractive = () => {
    const options = ['Interactive', 'Idle'];
    const current = options[Math.floor(Math.random() * options.length)];
    setInteractiveOption(current);
  };

  return (
    <div>
      <div style="margin-bottom: 2rem;">
        <h3>Do you want a fun option or an informative one?</h3>
        <button onClick={randomFun}>
          New Option
        </button>
        <p><strong>Your selection: {funOption}</strong></p>
      </div>

      <div style="margin-bottom: 2rem;">
        <h3>Do you want an interactive option or an idle one?</h3>
        <button onClick={randomInteractive}>
          New Option
        </button>
        <p><strong>Your selection: {interactiveOption}</strong></p>
      </div>

      {recommendedProduct && (
        <div style="margin-top: 2rem; text-align: center;">
          <h2>Your Recommended Product:</h2>
          <h3>{recommendedProduct.name}</h3>
          <img 
            src={recommendedProduct.img.src} 
            alt={recommendedProduct.name}
            style="max-width: 300px; height: auto; margin-top: 1rem; border-radius: 8px;"
          />
        </div>
      )}
    </div>
  );
}
