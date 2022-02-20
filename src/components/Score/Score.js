import './Score.css';

export default function Score(props) {
  const { score } = props;

  return (
    <span className='Score' data-testid='Score'>
      Score: {score}
    </span>
  );
}
