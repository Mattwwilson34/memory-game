import './Header.css';
import Score from '../Score/Score';
import HighScore from '../HighScore/HighScore';
import { useState } from 'react';

export default function Header(props) {
  const [gameOver, setGameOver] = useState(false);
  const { score, highScore } = props;
  return (
    <div className='Header' data-testid='Header'>
      <Score score={score} />
      <HighScore highScore={highScore} />
    </div>
  );
}
