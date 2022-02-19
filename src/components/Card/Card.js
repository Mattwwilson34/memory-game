import './Card.css';

export default function Card(img) {
  return (
    <div className='Card' data-testid='Card'>
      <img className='CardImage' alt='Pokemon' src={img}></img>
    </div>
  );
}
