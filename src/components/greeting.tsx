import { useContext } from 'react';
import { ScrollContext } from '../providers/scroll';
import './greeting.css';

export const Greeting = () => {
  const greeting = () => {
    let currentHour = (new Date()).getHours();
    if (currentHour < 5) {
      return 'Hello';
    } else if (currentHour < 13) {
      return 'Good morning';
    } else if (currentHour < 18) {
      return 'Good afternoon';
    } else if (currentHour < 23) {
      return 'Good evening';
    }
    return 'Hello';
  };

  const { yPosition } = useContext(ScrollContext);
  return <>
    <p className="relative text-center text-2xl" style={{right: `${yPosition * 1.5}px`, marginTop: '21vh', textShadow: ''}}>
      {greeting()}! My name is Nuttawut. I'm a Computer Science student at KMUTT.<br/>
      I'm interested in software development and now learning about full stack development<br/>
      which include front-end, back-end and devops too. I also like topics about Big Data and Microservices.<br/>
      I'm trying to improve myself to be better and better. Thank you for visitting my website. 😀 <br/>
    </p>
    <p className="flex justify-center space-x-2 py-6 text-3xl" id="arrow">
      <span>&#8250;</span><span>&#8250;</span><span>&#8250;</span>
    </p>
  </>;
};