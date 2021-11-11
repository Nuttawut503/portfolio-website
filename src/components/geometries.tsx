import styles from './geometry.module.css';

function Rectangle() {
  return <span className="inline-block">&#9648;</span>;
}

function Triangle() {
  return <span className="inline-block">&#9650;</span>;
}

function Circle() {
  return <span className="inline-block">&#9679;</span>;
}

function BorderRectangle() {
  return <span className="inline-block">&#9649;</span>;
}

function BorderTriangle() {
  return <span className="inline-block">&#9651;</span>;
}

function BorderCircle() {
  return <span className="inline-block">&#9675;</span>;
}

function Block() {
  return <span className="inline-block">&#9625;</span>;
}

function Cross() {
  return <span className="inline-block">&#10006;</span>;
}

function Star() {
  return <span className="inline-block">&#10032;</span>;
}

export function Geometries() {
  const shapes = [<BorderRectangle/>, <BorderTriangle/>, <BorderCircle/>, <Rectangle/>, <Triangle/>, <Circle/>, <Block/>, <Cross/>, <Star/>];
  const colors = ['red', 'blue', 'yellow', 'green', 'orange', 'purple'];
  return <>
    {Array.from({length: 86}).map(() => 
      <p
        key={Math.random()} 
        className={`${styles.geometry} absolute`}
        style={{
          transform: `rotate(${Math.random() * 360}deg)`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDuration: `${(Math.random() * 3) + 5}s`,
          animationDelay: `${Math.random() * 4}s`,
          color: colors[Math.floor(Math.random() * colors.length)],
          filter: 'blur(1px)'}}>
        {shapes[Math.floor(Math.random() * shapes.length)]}
      </p>
    )}
  </>;
}
