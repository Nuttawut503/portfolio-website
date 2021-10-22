import React, { useContext } from 'react';
import { ThemeColor, ThemeContext } from '../providers/theme';

export const ToggleThemeButton: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      className={`relative cursor-pointer self-center ${ThemeColor.get(theme)?.secondary}`}
      style={{width: '4rem', height: '1.5rem', borderRadius: '1.5rem', transition: 'background 0.5s'}}
      onClick={toggleTheme}>
      <div className={`absolute rounded-full top-0.5 ${theme==='dark'?'right-1':'right-10'} ${ThemeColor.get(theme)?.primary}`} style={{width: '1.25rem', height: '1.25rem', transition: 'all 0.5s'}}/>
    </div>
  );
};
