import styles from './geometry.module.css';

function Rectangle() {
  return <span className="inline-block">&#9649;</span>;
}

function Triangle() {
  return <span className="inline-block">&#9651;</span>;
}

function Circle() {
  return <span className="inline-block">&#9675;</span>;
}

export function Geometries() {
  const shapes = [<Rectangle/>, <Triangle/>, <Circle/>];
  const colors = ['red', 'blue', 'yellow', 'green', 'orange'];
  return <>
    {Array.from({length: 100}).map(() => 
      <p
        key={Math.random()} 
        className={`${styles.geometry} absolute`}
        style={{
          transform: `rotate(${Math.random() * 360}deg)`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 2}s`,
          color: colors[Math.floor(Math.random() * colors.length)],
          filter: 'blur(1px)'}}>
        {shapes[Math.floor(Math.random() * shapes.length)]}
      </p>
    )}
  </>;
}
