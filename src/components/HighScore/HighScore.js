import './HighScore.css';

export default function HighScore(props) {
  const { highScore } = props;
  return (
    <span className='HighScore' data-testid='HighScore'>
      High Score: {highScore}
    </span>
  );
}
