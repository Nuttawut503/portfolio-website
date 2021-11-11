import { useContext } from 'react';
import { ScrollContext } from '../providers/scroll';
import './greeting.css';

function hello() {
  let currentHour = (new Date()).getHours();
  if (currentHour < 5) return 'Hello';
  else if (currentHour < 13) return 'Good morning';
  else if (currentHour < 18) return 'Good afternoon';
  else if (currentHour < 23) return 'Good evening';
  return 'Hello';
};

export function Greeting() {
  const { yPosition } = useContext(ScrollContext);
  return  <div
            className="flex justify-center flex-wrap px-4 space-x-16 space-y-5 relative"
            style={{right: `${yPosition / window.innerHeight * 55}vw`, marginTop: '27vh'}}>
    <div className="space-y-5">
      <p className="text-xl md:text-3xl">{hello()}! 😀</p>
      <p className="text-3xl md:text-7xl font-black">I AM NUTTAWUT</p>
      <p className="text-lg md:text-2xl">a Computer Science student at KMUTT</p>
    </div>
    <p className="flex justify-center space-x-2 py-6 text-3xl" id="arrow">
      <span>&#8250;</span><span>&#8250;</span><span>&#8250;</span>
    </p>
  </div>;
};
