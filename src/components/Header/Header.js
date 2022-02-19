import './Header.css';
import Score from '../Score/Score';
import HighScore from '../HighScore/HighScore';

export default function Header() {
  return (
    <div className='Header' data-testid='Header'>
      <Score />
      <HighScore />
    </div>
  );
}
