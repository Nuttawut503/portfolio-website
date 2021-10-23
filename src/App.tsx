import { useContext } from 'react';
import { Background } from './components/background';
import { PortfolioTable } from './components/portfolioTable';
import { ThemeColors, ThemeContext } from './providers/theme';
import './App.css';

const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div id="main" className={`relative m-h-screen overflow-x-hidden ${ThemeColors.get(theme)?.text}`}  style={{background: ThemeColors.get(theme)?.gradient}}>
      <Background/>
      <div className="relative flex flex-col space-y-10 pt-16 pb-5">
        <PortfolioTable/>
      </div>
    </div>
  );
};

export default App;
