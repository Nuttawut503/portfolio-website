import { useContext } from 'react';
import { ScrollContext } from '../providers/scroll';
import './greeting.css';

export const Greeting = () => {
  const greeting = () => {
    let currentHour = (new Date()).getHours();
    if (currentHour < 5) return 'Hello';
    else if (currentHour < 13) return 'Good morning';
    else if (currentHour < 18) return 'Good afternoon';
    else if (currentHour < 23) return 'Good evening';
    return 'Hello';
  };

  const { yPosition } = useContext(ScrollContext);
  return  <div 
            className="flex justify-center flex-wrap px-4 space-x-16 space-y-5"
            style={{marginLeft: `-${yPosition / window.innerHeight * 60}vw`, marginTop: '33vh'}}>
    <div className="space-y-5">
      <p className="text-3xl">{greeting()}! 😀</p>
      <p className="text-7xl font-black">I AM NUTTAWUT</p>
      <p className="text-2xl">a Computer Science student at KMUTT</p>
    </div>
    <p className="flex justify-center space-x-2 py-6 text-3xl" id="arrow">
      <span>&#8250;</span><span>&#8250;</span><span>&#8250;</span>
    </p>
  </div>;
};