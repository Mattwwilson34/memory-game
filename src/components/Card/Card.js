import './Card.css';

export default function Card(props) {
  const { name, img } = props.pokemon;
  return (
    <div
      className='Card'
      data-name={name}
      onClick={(e) => console.log(e.target.parentElement.dataset.name)}>
      <img src={img} alt={name}></img>
    </div>
  );
}
