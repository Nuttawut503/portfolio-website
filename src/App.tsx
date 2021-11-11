import { useContext } from 'react';
import { Header } from './components/header';
import { PortfolioTable } from './components/portfolioTable';
import { ThemeColors, ThemeContext } from './providers/theme';
import './App.css';
import { Stars } from './components/stars';
import { Cards } from './components/cards';
import { Geometries } from './components/geometries';

export default function App() {
  const { theme } = useContext(ThemeContext);
  return <div id="main" className={`relative m-h-screen overflow-hidden ${ThemeColors.get(theme)?.text}`}  style={{background: ThemeColors.get(theme)?.gradient}}>
    {theme === 'dark'? <Stars/>: <Geometries/>}
    <Header/>
    <div className="relative flex flex-col space-y-10 pt-16 pb-5">
      <Cards/>
      <PortfolioTable/>
    </div>
    <p className="text-center pt-6 pb-3">Thank you for visitting my website.</p>
  </div>;
};
