import Mountain from '../assets/freepik-everest-min.png';
import { Navbar } from './navbar';
import { Greeting } from './greeting';

export const Background = () => {
  return <div className="relative w-screen h-screen">
    <img src={Mountain} alt="" className="absolute object-cover" style={{filter: 'brightness(70%) blur(1px)', bottom: `-45vh`}}/>
    <Navbar/>
    <Greeting/>
  </div>
};