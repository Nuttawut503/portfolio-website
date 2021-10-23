import { useContext } from 'react';
import { ThemeContext, ThemeColors } from '../providers/theme';
import Mountain from '../assets/freepik-everest-min.png';
import { Navbar } from './navbar';
import { Greeting } from './greeting';

export const Background = () => {
  const { theme } = useContext(ThemeContext);
  return <div className="relative w-screen h-screen" style={{background: ThemeColors.get(theme)?.gradient}}>
    <img src={Mountain} alt="" className="absolute -bottom-2/3 object-contain"/>
    <Navbar/>
    <Greeting/>
  </div>
};