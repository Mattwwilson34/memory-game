import './Header.css';
import Score from '../Score/Score';
import HighScore from '../HighScore/HighScore';

export default function Header(props) {
  const { score, highScore } = props;
  return (
    <div className='Header' data-testid='Header'>
      <Score score={score} />
      <HighScore highScore={highScore} />
    </div>
  );
}
