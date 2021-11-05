import styles from './star.module.css';

export function Stars() {
  return <>
    {Array.from({length: 100}).map(() => 
      <p
        key={Math.random()} 
        className={`${styles.star} absolute`}
        style={{top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`}}>
      </p>
    )}
  </>;
}
