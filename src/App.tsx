import React, { useContext } from 'react';
import { Navbar } from './components/navbar';
import { PortfolioTable } from './components/portfolioTable';
import { ThemeColor, ThemeContext } from './providers/theme';

const App: React.FC = () => {
  const { theme } = useContext(ThemeContext);
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
  return (
    <div className={ThemeColor.get(theme)?.primary + ' ' + ThemeColor.get(theme)?.text} style={{minHeight: '100vh', padding: '1.5rem'}}>
      <Navbar/>
      <div className="my-16"/>
      <div className="text-center text-xl">
        {greeting()}! My name is Nuttawut. I'm currently studying at KMUTT.<br/>
        I'm interested in software development and now learning about full stack development<br/>
        which include front-end, back-end and devops too. I also like topics about Big Data and Microservices.<br/>
        I'm trying to improve myself to be better and better. Thank you for visitting my website. 😀 
      </div>
      <div className="my-16"/>
      <PortfolioTable/>
      <div className="mb-4"/>
    </div>
  );
};

export default App;
