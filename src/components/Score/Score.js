import './Score.css';

export default function Score(props) {
  const { score } = props;

  if (score) {
    return (
      <span className='Score' data-testid='Score'>
        Score: {score}
      </span>
    );
  } else {
    return (
      <span className='Score' data-testid='Score'>
        Chose a pokemon
      </span>
    );
  }
}
