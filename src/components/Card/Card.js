import './Card.css';

export default function Card(props) {
  const { name, img } = props.pokemon;
  const { shuffleCards } = props;
  return (
    <div className='Card' data-name={name} onClick={shuffleCards}>
      <img src={img} alt={name}></img>
    </div>
  );
}
