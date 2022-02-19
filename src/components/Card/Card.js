import './Card.css';

export default function Card(props) {
  const { name, img } = props.pokemon;
  return (
    <div className='Card' data-testid='Card'>
      <img src={img} alt={name}></img>
    </div>
  );
}
