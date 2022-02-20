import './Card.css';

export default function Card(props) {
  const { name, img } = props.pokemon;
  const { updateCardsClicked, updateScore, shuffleCards, checkIfGameOver } =
    props;

  return (
    <div
      className='Card'
      data-name={name}
      onClick={() => {
        updateCardsClicked(name);
        if (checkIfGameOver(name)) {
          return;
        } else {
          updateScore();
          shuffleCards();
        }
      }}>
      <img src={img} alt={name}></img>
    </div>
  );
}
